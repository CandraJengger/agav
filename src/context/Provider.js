import React from 'react';
import audioListInitialState from './initialStates/audioList';
import audioListReducer from './reducers/audioList';

export const GlobalContext = React.createContext({});

const GlobalProvider = ({ children }) => {
  const [audioListState, audioListDispatch] = React.useReducer(
    audioListReducer,
    audioListInitialState
  );

  return (
    <GlobalContext.Provider value={{ audioListState, audioListDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
