import axios from 'axios';

const linkCardsInstance = axios.create({
  baseURL: 'https://66e35eb4494df9a478e50a4f.mockapi.io/api/linkCards',
});

export const requestCards = async () => {
  const { data } = await linkCardsInstance.get('/');
  return data;
};
