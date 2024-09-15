import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const linkCardsSlice = createSlice({
  name: 'link-cards',
  initialState,
  reducers: {
    fetchLinkCardsLoading: state => {
      state.isLoading = true;
    },
    fetchLinkCardsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    fetchLinkCardsError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    addLinkCard: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteLinkCard: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const {
  addLinkCard,
  deleteLinkCard,
  fetchLinkCardsLoading,
  fetchLinkCardsSuccess,
  fetchLinkCardsError,
} = linkCardsSlice.actions;

export default linkCardsSlice.reducer;
