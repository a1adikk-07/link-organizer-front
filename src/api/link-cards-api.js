import axios from 'axios';

const linkCardsInstance = axios.create({
  baseURL: 'https://66e35eb4494df9a478e50a4f.mockapi.io/api/linkCards',
});

export const requestFetchCards = async () => {
  const { data } = await linkCardsInstance.get('/');
  return data;
};

export const requestAddLinkCard = async body => {
  const { data } = await linkCardsInstance.post('/', body);
  return data;
};

export const requestDeleteLinkCard = async id => {
  const { data } = await linkCardsInstance.delete(`/${id}`);
  return data;
};
