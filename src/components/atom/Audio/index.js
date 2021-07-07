import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Audio = ({ audioRef, onStopAudio, src }) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const getCurrDuration = (e) => {
    const time = e.currentTarget.currentTime;

    setCurrentTime(time.toFixed(2));
  };

  useEffect(() => {
    if (typeof onStopAudio !== 'undefined') {
      if (currentTime === duration) {
        onStopAudio();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  return (
    <audio
      ref={audioRef}
      src={src}
      onLoadedData={(e) => {
        setDuration(e.currentTarget.duration.toFixed(2));
      }}
      onTimeUpdate={getCurrDuration}
      crossOrigin="anonymous"
    ></audio>
    // <ReactAudioPlayer
    // src={`http://localhost:5000/${src}`}
    //   src={src}
    //   ref={audioRef}
    //   onLoadedData={(e) => {
    //     setDuration(e.currentTarget.duration.toFixed(2));
    //   }}
    //   onTimeUpdate={getCurrDuration}
    //   crossOrigin="anonymous"
    // />
  );
};

export default Audio;
