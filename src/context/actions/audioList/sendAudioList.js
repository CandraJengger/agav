import axios from 'axios';
import {
  SEND_AUDIO_LIST_FAIL,
  SEND_AUDIO_LIST_LOADING,
  SEND_AUDIO_LIST_SUCCESS,
} from '../../../constants/actionTypes.js';

const saveAs = (blob, filename) => {
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display:none';
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
};

const getAudioList = (audioList) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    data: audioList,
  };

  const axiosOptions = {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({
    type: SEND_AUDIO_LIST_LOADING,
  });

  console.log(requestPayload);

  axios
    .post(
      'https://api-agav.herokuapp.com/verify/',
      requestPayload,
      axiosOptions
    )
    .then((res) => {
      const blob = new Blob([res.data], {
        type: 'application/octet-stream',
      });
      const filename = 'agav_download.zip';
      saveAs(blob, filename);

      dispatch({
        type: SEND_AUDIO_LIST_SUCCESS,
        payload: [],
      });

      onSuccess([]);
    })
    .catch((err) => {
      dispatch({
        type: SEND_AUDIO_LIST_FAIL,
        payload: 'Something went wrong',
      });
    });
};

export default getAudioList;
