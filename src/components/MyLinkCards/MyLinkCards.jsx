import { useSelector, useDispatch } from 'react-redux';
import styles from './my-link-cards.module.css';

import { getFilteredCards } from '../../redux/linkCards/cards-selectors';

import LinkCardsForm from './LinkCardsForm/LinkCardsForm';
import LinkCardsList from './LinkCardsList/LinkCardsList';

import {
  addLinkCard,
  deleteLinkCard,
} from '../../redux/linkCards/link-cards-slice';

import { setFilter } from '../../redux/filter/filter-slice';

const MyLinkCards = () => {
  const linkCards = useSelector(getFilteredCards);

  const dispatch = useDispatch();

  const onAddLinkCard = data => {
    const action = addLinkCard(data);
    dispatch(action);
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
        <div className={styles.listForCards}>
          <LinkCardsList items={linkCards} deleteCard={onDeleteCard} />
        </div>
      </div>
    </div>
  );
};

export default MyLinkCards;
