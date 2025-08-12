import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://link-organizer-backend.onrender.com/api',
});

const setToken = token => {
  if (token) {
    return authInstance.defaults.headers.authorization = `Bearer ${token}`;
  }
  authInstance.defaults.headers.Authorization = "";
}

export const signupRequest = async body => {
  const { data } = await authInstance.post('/auth/signup', body);
  setToken(data.token);
  return data;
};

export const signinRequest = async body => {
  const { data } = await authInstance.post('/auth/signin', body);
  setToken(data.token);
  return data;
};

export const currentRequest = async (token) => {
  setToken(token);
  try {
    const { data } = await authInstance.get("/auth/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const { data } = await authInstance.post("/auth/signout");

  return data;
}

export default authInstance;