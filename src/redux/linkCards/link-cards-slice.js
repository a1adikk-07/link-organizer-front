import { createSlice } from '@reduxjs/toolkit';

import { pending, rejected } from 'shared/functions/redux';

import {
  fetchLinkCards,
  addLinkCard,
  deleteLinkCard,
} from './link-cards-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const linkCardsSlice = createSlice({
  name: 'linkCards',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchLinkCards.pending, pending)
      .addCase(fetchLinkCards.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchLinkCards.rejected, rejected)
      .addCase(addLinkCard.pending, pending)
      .addCase(addLinkCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(deleteLinkCard.pending, pending)
      .addCase(deleteLinkCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ _id }) => _id !== payload);
      })
      .addCase(deleteLinkCard.rejected, rejected);
  },
});

export default linkCardsSlice.reducer;
