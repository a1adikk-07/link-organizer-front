import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  selectLinkCards,
  selectFilteredCards,
} from '../../redux/linkCards/cards-selectors';
import {
  fetchLinkCards,
  addLinkCard,
  deleteLinkCard,
} from '../../redux/linkCards/link-cards-operations';
import LinkCardsForm from './LinkCardsForm/LinkCardsForm';
import LinkCardsList from './LinkCardsList/LinkCardsList';

import Filter from 'components/Filter/Filter';

import { setFilter } from '../../redux/filter/filter-slice';

// import { selectFilter } from '../../redux/filter/filter-selectors';

import styles from './my-link-cards.module.css';

const MyLinkCards = () => {
  const { isLoading, error } = useSelector(selectLinkCards);

  const items = useSelector(selectFilteredCards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLinkCards());
  }, [dispatch]);

  const onAddLinkCard = data => {
    dispatch(addLinkCard(data));
  };

  const onDeleteCard = id => {
    dispatch(deleteLinkCard(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <LinkCardsForm onSubmit={onAddLinkCard} />
      <div className={styles.cardsListDiv}>
        <Filter onChange={changeFilter} />
        {isLoading && <p>Loading...</p>}
        <div className={styles.listForCards}>
          {error && <p>{error}</p>}
          {Boolean(items.length) && (
            <LinkCardsList items={items} deleteCard={onDeleteCard} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLinkCards;
