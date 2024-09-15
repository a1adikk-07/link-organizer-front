import * as linkCardsApi from '../../api/link-cards-api';

import {
  fetchLinkCardsLoading,
  fetchLinkCardsSuccess,
  fetchLinkCardsError,
} from './link-cards-slice';

export const fetchLinkCards = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchLinkCardsLoading());
      const data = await linkCardsApi.requestCards();
      dispatch(fetchLinkCardsSuccess(data));
    } catch (error) {
      dispatch(fetchLinkCardsError(error.message));
    }
  };
  return func;
};
