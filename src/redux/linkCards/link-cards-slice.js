import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const linkCardsSlice = createSlice({
  name: 'linkCards',
  initialState: [],
  reducers: {
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

export const { addLinkCard, deleteLinkCard } = linkCardsSlice.actions;

export default linkCardsSlice.reducer;
