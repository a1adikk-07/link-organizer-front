export const getAllLinkCards = store => store.linkCards;

export const getFavoriteLinkCards = store => {
  return store.linkCards.filter(({ favorite }) => favorite);
};

export const getFilteredCards = store => {
  const { linkCards, filter } = store;
  if (!filter) {
    return linkCards;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredCards = linkCards.filter(({ title }) => {
    const normalizedTitle = title.toLowerCase();

    return normalizedTitle.includes(normalizedFilter);
  });
  return filteredCards;
};
