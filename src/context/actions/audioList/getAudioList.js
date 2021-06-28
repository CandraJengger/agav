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
    sample_rate: 8000,
    min_duration: '00:00',
    max_duration: '00:10',
    frame: 10,
    aggressive: 3,
  };

  dispatch({
    type: GET_AUDIO_LIST_LOADING,
  });

  axios
    .post('http://localhost:5000/', requestPayload)
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
