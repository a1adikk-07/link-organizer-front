import instance from "./auth-api";

export const requestFetchCards = async () => {
  const { data } = await instance.get('/LinkCards/');
  return data;
};

export const requestAddLinkCard = async body => {
  const { data } = await instance.post('/LinkCards/', body);
  return data;
};

export const requestDeleteLinkCard = async id => {
  const { data } = await instance.delete(`/LinkCards/${id}`);
  return data;
};
