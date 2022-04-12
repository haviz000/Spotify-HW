import { createSlice } from '@reduxjs/toolkit';

export const playlistDataSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlistData: {},
    
  },
  reducers: {
    getPlaylist: (state, action) => {
      state.playlistData = action.payload.playlistData;
    }
  }
});

export const { getPlaylist } = playlistDataSlice.actions;

export default playlistDataSlice.reducer;
