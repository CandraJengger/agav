import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import {
  Gap,
  AppLayout,
  GenerateComponent,
  Sidebar,
  AudioList,
  AudioPlayer,
  MiniAudio,
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
  const [isPlaying, setIsPlaying] = React.useState(null);
  const [audioList, setAudioList] = React.useState([]);
  const [currentAudio, setCurrentAudio] = React.useState(null);

  const onSubmit = () => {
    if (form.link) {
      console.log('ini yang di submit', form);
      setAudioList(audioDummy);
      return;
    }

    setError(true);
  };

  const onSendVerifiedList = () => {
    console.log('Verified list :>> ', audioList);
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    setError(false);
  };

  const handleAudioPlay = (audio) => {
    setIsPlaying(audio.title);
    setCurrentAudio(audio);
  };

  const handleUpdateAudio = (index, value) => {
    let tempState = [...audioList];
    let tempElement = { ...audioList[index] };
    tempElement.isVerified = value;
    tempState[index] = tempElement;

    setAudioList(tempState);
    setCurrentAudio(tempElement);
  };

  React.useEffect(() => {
    console.log(isPlaying);
    console.log(audioList);
    console.log('current audio', currentAudio);
  }, [isPlaying, audioList, currentAudio]);

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
            onSubmit={onSubmit}
          />
          <Gap height="44px" width="10px" />
          {audioList.length > 0 && (
            <AudioList
              audioList={audioList}
              isPlaying={isPlaying}
              playAudio={handleAudioPlay}
              onVerification={handleUpdateAudio}
              onSendVerifiedList={onSendVerifiedList}
            />
          )}

          {/* <AudioPlayer /> */}
        </Grid>
      </Grid>
      {/* Belum onPause */}
      <MiniAudio
        audio={currentAudio}
        playAudio={handleAudioPlay}
        style={{ position: 'fixed', right: 0, bottom: 0, left: 0 }}
      />
    </AppLayout>

  );
}

export default App;
