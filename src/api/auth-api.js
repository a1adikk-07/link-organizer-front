import axios from 'axios';

const authInstance = axios.create({
  // baseURL: 'https://link-organizer-backend.onrender.com/api',
    baseURL: 'http://localhost:3001/api',


});

export const signupRequest = async body => {
  const { data } = await authInstance.post('/auth/signup', body);
  return data;
};
