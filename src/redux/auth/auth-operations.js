import { createAsyncThunk } from '@reduxjs/toolkit';

import { signupRequest } from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { isRejectedWithValue }) => {
    try {
      const data = await signupRequest(body);
      return data;
    } catch (error) {
      console.log(error);
      return isRejectedWithValue(error.response.data.message);
    }
  }
);
