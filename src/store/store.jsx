import { configureStore, combineReducers } from '@reduxjs/toolkit';
import aviasalesReducer from './reducer';
import aviasalesReducerButtons from './reducer.top';
import networkReducer from './reduceNetwork';
import { setOnlineStatus, setOfflineStatus } from './actions';
import { aviasalesApi } from '../api/tikets.api';

const rootReducer = combineReducers({
  aviasales: aviasalesReducer,
  tabs: aviasalesReducerButtons,
  network: networkReducer,
  [aviasalesApi.reducerPath]: aviasalesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviasalesApi.middleware),
});

window.addEventListener('online', () => {
  store.dispatch(setOnlineStatus());
});

window.addEventListener('offline', () => {
  store.dispatch(setOfflineStatus());
});

export default store;
