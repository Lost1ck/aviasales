import { configureStore } from '@reduxjs/toolkit';
import aviasalesReducer from './reducer';
import aviasalesReducerButtons from './reducer.top';
import networkReducer from './reduceNetwork';
import { setOnlineStatus, setOfflineStatus } from './actions';

const store = configureStore({
  reducer: {
    aviasales: aviasalesReducer,
    tabs: aviasalesReducerButtons,
    network: networkReducer,
  },
});

window.addEventListener('online', () => {
  store.dispatch(setOnlineStatus());
});

window.addEventListener('offline', () => {
  store.dispatch(setOfflineStatus());
});

export default store;
