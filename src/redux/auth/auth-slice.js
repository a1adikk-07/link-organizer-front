import { createSlice } from '@reduxjs/toolkit';

import {signup, signin, current, logout} from './auth-operations';

import { pending, rejected } from '../../shared/functions/redux';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, pending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, rejected)
      .addCase(signin.pending, pending)
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signin.rejected, rejected)
      .addCase(current.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, (state) => {
        state.isLoading = false;
        state.token = null;
      })
      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, (state) => {
        state.user = {};
        state.token = '';
        state.isLoading = false;
        state.isLogin = false;
      })
      .addCase(logout.rejected, rejected)
  },
});

export default authSlice.reducer;
