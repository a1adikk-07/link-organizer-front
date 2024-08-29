import { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import styles from './my-link-cards.module.css';

import LinkCardsForm from './LinkCardsForm/LinkCardsForm';
import LinkCardsList from './LinkCardsList/LinkCardsList';

import useLocalStorage from 'hooks/useLocalStorage';

const MyLinkCards = ({}) => {
  const [linkCards, setLinkCards] = useLocalStorage('my-link-cards', []);
  const [filter, setFilter] = useState('');

  const addLinkCard = useCallback(data => {
    setLinkCards(prevLinkCards => {
      const newLinkCard = {
        id: nanoid(),
        ...data,
      };
      return [...prevLinkCards, newLinkCard];
    });
  }, []);

  const deleteCard = useCallback(id => {
    setLinkCards(prevLinkCards => prevLinkCards.filter(item => item.id !== id));
  }, []);

  const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  const getFilteredCards = () => {
    if (!filter) {
      return linkCards;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredCards = linkCards.filter(({ title }) => {
      const normalizedTitle = title.toLowerCase();

      return normalizedTitle.includes(normalizedFilter);
    });
    return filteredCards;
  };

  const items = getFilteredCards();

  return (
    <div className={styles.wrapper}>
      <LinkCardsForm onSubmit={addLinkCard} />
      <div className={styles.cardsListDiv}>
        <input
          className={styles.inputFilter}
          onChange={changeFilter}
          name="filter"
          placeholder="Search..."
        />
        <LinkCardsList items={items} deleteCard={deleteCard} />
      </div>
    </div>
  );
};

export default MyLinkCards;
