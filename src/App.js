import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WaveSurfer from 'wavesurfer.js';
import {
  Gap,
  AppLayout,
  GenerateComponent,
  Sidebar,
  AudioList,
  AudioPlayer,
  MiniAudio,
  Loading,
  Wave,
  WaveContainer,
  AudioControls,
  Button,
} from './components';
import colors from './assets/theme/colors';
import fonts from './assets/fonts';
import { GlobalContext } from './context/Provider';
import getAudioList from './context/actions/audioList/getAudioList';
import sendAudioList from './context/actions/audioList/sendAudioList';
import audioDummy from './data/audio-dummy';

function App() {
  // context
  const {
    audioListDispatch,
    audioListState: {
      getAudioList: { loading, error },
    },
  } = React.useContext(GlobalContext);

  const [form, setForm] = React.useState({
    link: '',
    sample_rate: 8000,
    max_duration: 30,
    min_duration: 0,
    frame: 10,
    aggressive: 3,
  });
  const [titleSongCurrentPlaying, setTitleSongCurrentPlaying] =
    React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentAudio, setCurrentAudio] = React.useState(null);
  const [audioList, setAudioList] = React.useState([]);
  const [audioCurrentIndex, setAudioCurrentIndex] = React.useState(0);
  const [inputIsAlready, setInputIsAlready] = React.useState({
    status: false,
    message: '',
  });
  const [open, setOpen] = React.useState(false);

  const audioRef = React.useRef();
  let waveform = React.useRef();
  const containerWaveRef = React.useRef();

  React.useEffect(() => {
    if (currentAudio) {
      if (window.innerWidth > 960) {
        if (waveform.current !== undefined) {
          console.log((waveform.current.mediaContainer.innerHTML = ''));
        }
        waveform.current = WaveSurfer.create({
          waveColor: colors.white,
          progressColor: colors.pink,
          container: containerWaveRef.current,
          backend: 'WebAudio',
          barWidth: 3,
          barRadius: 3,
          barHeight: 3,
          barGap: 3,
          height: 55,
          responsive: true,
        });
        waveform.current.load(currentAudio?.path);

        waveform.current.on('finish', () => {
          onStopAudio();
        });
      }
    }
  }, [currentAudio]);

  const handleOpenAudioPlayer = () => {
    setOpen((prev) => !prev);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  const onSubmit = () => {
    const prefix = new RegExp('youtu');
    if (form.link.length === 0) {
      setInputIsAlready({
        status: true,
        message: 'This field is required',
      });
      return;
    }

    if (!prefix.test(form.link)) {
      setInputIsAlready({
        status: true,
        message: 'Please enter a valid youtube link',
      });
      return;
    }

    if (form.link && form.link.length !== 0) {
      console.log(form);
      getAudioList(form)(audioListDispatch)(setAudioList);
      // setAudioList(audioDummy);
      return;
    }
  };

  const resetState = () => {
    setAudioList([]);
    setForm({
      link: '',
      sample_rate: 8000,
      max_duration: 30,
      min_duration: 0,
      frame: 10,
      aggressive: 3,
    });
    setCurrentAudio(null);
    setAudioCurrentIndex(0);
  };

  const onSendVerifiedList = () => {
    console.log('Verified list :>> ', audioList);
    sendAudioList(audioList)(audioListDispatch)(resetState);
    // resetState();
  };

  const onChange = ({ name, value }) => {
    setInputIsAlready(false);
    if (form.link.length < 1) {
      setInputIsAlready(true);
    }
    setForm({ ...form, [name]: value });
  };

  const onAudioPlayingNow = (audio, index) => {
    setTitleSongCurrentPlaying(audio.title);
    setCurrentAudio(audio);
    setAudioCurrentIndex(index);
  };

  const onUpdateAudio = (index, value) => {
    let tempState = [...audioList];
    let tempElement = { ...audioList[index] };
    tempElement.isVerified = value;
    tempState[index] = tempElement;

    setAudioList(tempState);
    setCurrentAudio(tempElement);
  };

  const onVerification = () => {
    let tempState = [...audioList];
    let tempElement = { ...audioList[audioCurrentIndex] };
    tempElement.isVerified = !audioList[audioCurrentIndex]?.isVerified;
    tempState[audioCurrentIndex] = tempElement;

    setAudioList(tempState);
  };

  const onPlayPause = async (waveform) => {
    const audioRf = audioRef.current;

    if (!isPlaying) {
      setIsPlaying(true);
      if (waveform) {
        waveform.play();
        return;
      }
      audioRf.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      if (waveform) {
        waveform.pause();
        return;
      }
      audioRf.pause();
    }
  };

  const onNextAudio = (waveform) => {
    if (isPlaying) {
      setIsPlaying(false);
      waveform.pause();
    }
    if (audioCurrentIndex < audioList.length - 1) {
      setAudioCurrentIndex(audioCurrentIndex + 1);
    } else {
      setAudioCurrentIndex(0);
    }
  };

  const onPrevAudio = (waveform) => {
    if (isPlaying) {
      setIsPlaying(false);
      waveform.pause();
    }

    if (audioCurrentIndex - 1 < 0) {
      setAudioCurrentIndex(audioList.length - 1);
    } else {
      setAudioCurrentIndex(audioCurrentIndex - 1);
    }
  };

  const onStopAudio = () => setIsPlaying(false);

  React.useEffect(() => {
    setCurrentAudio(audioList[audioCurrentIndex]);
    setTitleSongCurrentPlaying(audioList[audioCurrentIndex]?.title);
  }, [audioList, audioCurrentIndex]);

  return (
    <AppLayout>
      <Grid container>
        <Grid item md={4}>
          <Hidden smDown>
            <Sidebar
              form={form}
              error={inputIsAlready}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={8}>
          <Gap height="61px" width="10px" />
          <Hidden mdUp>
            <GenerateComponent
              form={form}
              onChange={onChange}
              audioList={audioList}
              onSubmit={onSubmit}
              error={inputIsAlready}
            />
            <Gap height="44px" width="10px" />
          </Hidden>
          <Hidden smDown>
            <Box paddingLeft="38px" paddingRight="38px">
              {audioList.length > 0 && (
                <>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="h4"
                      component="h1"
                      style={{
                        fontFamily: fonts.nunito,
                        fontWeight: 700,
                        color: colors.primary,
                      }}
                    >
                      Audio List
                    </Typography>
                    <Button
                      type="secondary"
                      text="Send audio list"
                      onClick={onSendVerifiedList}
                    />
                  </Box>
                  <Gap height="40px" width="10px" />
                </>
              )}
            </Box>
          </Hidden>

          {loading && <Loading text="Downloading.." />}
          {error && (
            <Box
              paddingLeft="30px"
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography
                variant="h4"
                component="span"
                style={{ fontFamily: fonts.nunito }}
              >
                Something went wrong
              </Typography>
              <Gap height="28px" width="10px" />
              <Button text="Retry" onClick={onSubmit} />
            </Box>
          )}
          {audioList.length > 0 && (
            <>
              {/* hidden onTablet */}
              <Hidden mdUp>
                <AudioList
                  withButtonSend
                  audioList={audioList}
                  titleSongCurrentPlaying={titleSongCurrentPlaying}
                  playAudio={onAudioPlayingNow}
                  onVerification={onUpdateAudio}
                  onSendVerifiedList={onSendVerifiedList}
                  withTitle
                />
              </Hidden>
              {/* hidden onMobile */}
              <Hidden smDown>
                <AudioList
                  audioList={audioList}
                  titleSongCurrentPlaying={titleSongCurrentPlaying}
                  playAudio={onAudioPlayingNow}
                  onVerification={onUpdateAudio}
                  onSendVerifiedList={onSendVerifiedList}
                  textAlign="center"
                  titleBold
                />
              </Hidden>
            </>
          )}
        </Grid>
      </Grid>

      {currentAudio && (
        <>
          <Hidden mdUp>
            <MiniAudio
              audio={currentAudio}
              audioRef={audioRef}
              onPlayPause={onPlayPause}
              isPlaying={isPlaying}
              onStopAudio={onStopAudio}
              handleOpenAudioPlayer={handleOpenAudioPlayer}
              fixed
            />
          </Hidden>
        </>
      )}
      {currentAudio && (
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <div>
            <AudioPlayer
              audio={currentAudio}
              audioRef={audioRef}
              onPlayPause={onPlayPause}
              isPlaying={isPlaying}
              onStopAudio={onStopAudio}
              onNextAudio={onNextAudio}
              onPrevAudio={onPrevAudio}
              onVerification={onVerification}
              onHideAudioPlayer={handleOpenAudioPlayer}
            />
          </div>
        </Slide>
      )}
      <Hidden smDown>
        <div></div>
        {currentAudio && (
          <Box
            display="flex"
            justifyContent="space-between"
            position="fixed"
            bottom="0"
            right="0"
            left="0"
            paddingTop="12px"
            paddingBottom="12px"
            paddingLeft="48px"
            paddingRight="48px"
            alignItems="center"
            style={{ background: colors.primary }}
          >
            <WaveContainer type="primary" height="80px">
              <Wave id="waveform" ref={containerWaveRef} />
            </WaveContainer>
            <Box marginLeft="40px">
              <Typography
                style={{ color: colors.white, fontFamily: fonts.nunito }}
                variant="h6"
              >
                {currentAudio?.title.length > 20
                  ? `${currentAudio?.title.substring(0, 20)}...`
                  : currentAudio?.title}
              </Typography>
              <Gap height="16px" width="10px" />
              <AudioControls
                type="primary"
                center
                isPlaying={isPlaying}
                onPlayPause={() => onPlayPause(waveform.current)}
                onNextAudio={() => onNextAudio(waveform.current)}
                onPrevAudio={() => onPrevAudio(waveform.current)}
              />
            </Box>
            <Gap height="46px" width="10px" />
          </Box>
        )}
      </Hidden>
    </AppLayout>
  );
}

export default App;
