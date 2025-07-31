import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { selectFilteredCards } from '../../redux/linkCards/cards-selectors';

import LinkCardsList from 'components/MyLinkCards/LinkCardsList/LinkCardsList';

import {
  fetchLinkCards,
  deleteLinkCard,
} from '../../redux/linkCards/link-cards-operations';

import styles from './all-link-cards.module.css';

const AllLinkCards = () => {
  const items = useSelector(selectFilteredCards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLinkCards());
  }, [dispatch]);

  const onDeleteCard = id => {
    dispatch(deleteLinkCard(id));
  };

  return (
    <div className={styles.cardsListContainer}>
      <LinkCardsList items={items} deleteCard={onDeleteCard} />

      {/* <ul className={styles.cardList}>{elements}</ul> */}
    </div>
  );
};

export default AllLinkCards;
