import { createAsyncThunk } from '@reduxjs/toolkit';

import * as linkCardsApi from '../../api/link-cards-api';

export const fetchLinkCards = createAsyncThunk(
  'linkCards/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const data = await linkCardsApi.requestFetchCards();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addLinkCard = createAsyncThunk(
  'LinkCards/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await linkCardsApi.requestAddLinkCard(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ title }, { getState }) => {
      const { linkCards } = getState();
      const normalizedTitle = title.toLowerCase();
      const dublicate = linkCards.items.find(item => {
        const normalizedCurrentTitle = item.title.toLowerCase();

        return normalizedTitle === normalizedCurrentTitle;
      });
      if (dublicate) {
        alert(`Book with ${title} already in list`);
        return false;
      }
    },
  }
);

export const deleteLinkCard = createAsyncThunk(
  'linkCards/delete',
  async (id, { rejectWithValue }) => {
    try {
      await linkCardsApi.requestDeleteLinkCard(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
