import axios from 'axios';
import {
  SEND_AUDIO_LIST_FAIL,
  SEND_AUDIO_LIST_LOADING,
  SEND_AUDIO_LIST_SUCCESS,
} from '../../../constants/actionTypes.js';

const getAudioList = (audioList) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    data: audioList,
  };

  dispatch({
    type: SEND_AUDIO_LIST_LOADING,
  });

  console.log(requestPayload);

  axios
    .post('https://api-agav.herokuapp.com/verify/', requestPayload)
    .then((res) => {
      dispatch({
        type: SEND_AUDIO_LIST_SUCCESS,
        payload: [],
      });

      onSuccess([]);
      // res download
      // onSuccess(audioDummy);
    })
    .catch((err) => {
      dispatch({
        type: SEND_AUDIO_LIST_FAIL,
        payload: 'Something went wrong',
      });
    });
};

export default getAudioList;
