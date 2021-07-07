import axios from 'axios';
import {
  GET_AUDIO_LIST_FAIL,
  GET_AUDIO_LIST_LOADING,
  GET_AUDIO_LIST_SUCCESS,
} from '../../../constants/actionTypes.js';
import audioDummy from '../../../data/audio-dummy.js';

const getAudioList = (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    url: form.link || '',
    sample_rate:
      form.sample_rate < 1000 ? form.sample_rate * 1000 : form.sample_rate,
    min_duration: form.min_duration,
    max_duration: form.max_duration,
    frame: form.frame,
    aggressive: form.aggressive,
  };

  dispatch({
    type: GET_AUDIO_LIST_LOADING,
  });

  console.log(requestPayload);

  axios
    .post('https://api-agav.herokuapp.com/urls/', requestPayload)
    .then((res) => {
      dispatch({
        type: GET_AUDIO_LIST_SUCCESS,
        payload: res.data.data,
      });

      console.log('res.data.data :>> ', res.data.data);
      onSuccess(res.data.data);
      // onSuccess(audioDummy);
    })
    .catch((err) => {
      // onSuccess(audioDummy);
      dispatch({
        type: GET_AUDIO_LIST_FAIL,
        payload: 'Something went wrong',
      });
    });
};

export default getAudioList;
