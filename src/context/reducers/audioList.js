import {
  GET_AUDIO_LIST_FAIL,
  GET_AUDIO_LIST_LOADING,
  GET_AUDIO_LIST_SUCCESS,
} from '../../constants/actionTypes.js';

const audioList = (state, { type, payload }) => {
  switch (type) {
    case GET_AUDIO_LIST_LOADING:
      return {
        ...state,
        getAudioList: {
          ...state.getAudioList,
          loading: true,
          error: null,
        },
      };

    case GET_AUDIO_LIST_SUCCESS:
      return {
        ...state,
        getAudioList: {
          ...state.getAudioList,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_AUDIO_LIST_FAIL:
      return {
        ...state,
        getAudioList: {
          ...state.getAudioList,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default audioList;
