import { createSlice } from '@reduxjs/toolkit';

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

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
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
        state.items.unshift(payload);
      })
      .addCase(deleteLinkCard.pending, pending)
      .addCase(deleteLinkCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteLinkCard.rejected, rejected);
  },
});

export default linkCardsSlice.reducer;
