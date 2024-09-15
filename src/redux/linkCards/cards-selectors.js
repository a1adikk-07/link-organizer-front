export const selectAllLinkCards = store => store.linkCards;

export const selectFavoriteLinkCards = store => {
  return store.linkCards.filter(({ favorite }) => favorite);
};

export const selectFilteredCards = store => {
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
