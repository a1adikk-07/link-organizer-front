import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './my-link-cards.module.css';

import LinkCardsForm from './LinkCardsForm/LinkCardsForm';
import LinkCardsList from './LinkCardsList/LinkCardsList';

class MyLinkCards extends Component {
  state = {
    linkCards: [],
    filter: '',
  };

  addLinkCard = data => {
    this.setState(({ linkCards }) => {
      const newBook = {
        id: nanoid(),
        ...data,
      };
      return {
        linkCards: [...linkCards, newBook],
      };
    });
  };

  deleteCard = id => {
    this.setState(({ linkCards }) => {
      const newLinkCards = linkCards.filter(item => item.id !== id);

      return {
        linkCards: newLinkCards,
      };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredCards() {
    const { filter, linkCards } = this.state;

    if (!filter) {
      return linkCards;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredCards = linkCards.filter(({ title }) => {
      const normalizedTitle = title.toLowerCase();

      return normalizedTitle.includes(normalizedFilter);
    });
    return filteredCards;
  }

  render() {
    // const { linkCards } = this.state;
    const { addLinkCard, deleteCard, changeFilter } = this;
    const linkCards = this.getFilteredCards();
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
          <LinkCardsList items={linkCards} deleteCard={deleteCard} />
        </div>
      </div>
    );
  }
}

export default MyLinkCards;
