import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from '../../redux/filter/filter-selectors';

export const selectAllLinkCards = store => store.linkCards.items;

export const selectFavoriteLinkCards = createSelector(
  [selectAllLinkCards],
  linkCards => linkCards.filter(({ favorite }) => favorite)
);

export const selectLinkCards = store => store.linkCards;

export const selectFilteredCards = createSelector(
  [selectAllLinkCards, selectFilter],
  (linkCards, filter) => {
    if (!filter) {
      return linkCards;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    return linkCards.filter(({ title }) =>
      title.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);

// export const selectFilteredCards = store => {
//   const { linkCards, filter } = store;
//   const { items } = linkCards;
//   if (!filter) {
//     return items;
//   }

//   const normalizedFilter = filter.toLowerCase();

//   const filteredLinkCards = linkCards.items.filter(({ title }) => {
//     const normalizedTitle = title.toLowerCase();

//     return normalizedTitle.includes(normalizedFilter);
//   });
//   return filteredLinkCards;
// };
