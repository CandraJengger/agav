import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';
import {
  Gap,
  AppLayout,
  GenerateComponent,
  Sidebar,
  AudioList,
  AudioPlayer,
  MiniAudio,
  Loading,
} from './components';
import audioDummy from './data/audio-dummy';

function App() {
  const [form, setForm] = React.useState({
    link: '',
    'sample-rate': 100,
    'max-duration': 100,
    'min-duration': 100,
    frames: 100,
    threshold: 100,
  });
  const [error, setError] = React.useState(false);
  const [titleSongCurrentPlaying, setTitleSongCurrentPlaying] =
    React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [currentAudio, setCurrentAudio] = React.useState(null);
  const [audioList, setAudioList] = React.useState([]);
  const [audioCurrentIndex, setAudioCurrentIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const audioRef = React.useRef();

  const handleOpenAudioPlayer = () => {
    setOpen((prev) => !prev);
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (form.link) {
        console.log('ini yang di submit', form);
        setAudioList(audioDummy);
        return;
      }

      setError(true);
    }, 1500);
  };

  const onSendVerifiedList = () => {
    console.log('Verified list :>> ', audioList);
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    setError(false);
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

  const onPlayPause = (waveform) => {
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
    console.log('onNextAudio :>> ');

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
    console.log('onPrevAudio :>> ');

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
              error={error}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={8}>
          <Gap height="61px" width="10px" />
          <GenerateComponent
            form={form}
            error={error}
            onChange={onChange}
            audioList={audioList}
            onSubmit={onSubmit}
          />
          <Gap height="44px" width="10px" />
          {loading && <Loading text="Downloading.." />}
          {audioList.length > 0 && (
            <AudioList
              audioList={audioList}
              titleSongCurrentPlaying={titleSongCurrentPlaying}
              playAudio={onAudioPlayingNow}
              onVerification={onUpdateAudio}
              onSendVerifiedList={onSendVerifiedList}
            />
          )}
        </Grid>
      </Grid>

      {currentAudio && (
        <MiniAudio
          audio={currentAudio}
          audioRef={audioRef}
          onPlayPause={onPlayPause}
          isPlaying={isPlaying}
          onStopAudio={onStopAudio}
          handleOpenAudioPlayer={handleOpenAudioPlayer}
          fixed
        />
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
    </AppLayout>
  );
}

export default App;
