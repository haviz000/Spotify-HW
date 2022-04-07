import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    isAuth: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    }
  }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
