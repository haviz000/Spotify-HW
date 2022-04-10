import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import playlistDataReducer from './slice/playlistDataSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    playlist:playlistDataReducer,
  }
});
