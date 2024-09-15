import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './my-link-cards.module.css';

import { selectAllLinkCards } from '../../redux/linkCards/cards-selectors';
import { fetchLinkCards } from '../../redux/linkCards/link-cards-operations';
import LinkCardsForm from './LinkCardsForm/LinkCardsForm';
import LinkCardsList from './LinkCardsList/LinkCardsList';

import {
  addLinkCard,
  deleteLinkCard,
} from '../../redux/linkCards/link-cards-slice';

import { setFilter } from '../../redux/filter/filter-slice';

const MyLinkCards = () => {
  const { items, isLoading, error } = useSelector(selectAllLinkCards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLinkCards());
  }, []);

  const isDublicate = ({ title }) => {
    const normalizedTitle = title.toLowerCase();

    const dublicate = items.find(item => {
      const normalizedCurrentTitle = item.title.toLowerCase();

      return normalizedTitle === normalizedCurrentTitle;
    });
    return Boolean(dublicate);
  };

  const onAddLinkCard = data => {
    if (isDublicate(data)) {
      return alert(
        `Book with ${data.title} and ${data.author} already in list`
      );
    }
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
        <input
          className={styles.inputFilter}
          onChange={changeFilter}
          name="filter"
          placeholder="Search..."
        />
        {isLoading && <p>Loading...</p>}
        <div className={styles.listForCards}>
          {error && <p>{error}</p>}
          {Boolean(items.length) && (
            <LinkCardsList items={items} deleteCard={onDeleteCard} />
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default MyLinkCards;
