import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://link-organizer-backend.onrender.com/api',
});

export const signupRequest = async body => {
  const { data } = await authInstance.post('/auth/signup', body);
  return data;
};

export const signinRequest = async body => {
  const { data } = await authInstance.post('/auth/signin', body);
  return data;
};
