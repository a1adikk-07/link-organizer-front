import { createAsyncThunk } from '@reduxjs/toolkit';

import { signupRequest, signinRequest } from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signupRequest(body);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signinRequest(body);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

