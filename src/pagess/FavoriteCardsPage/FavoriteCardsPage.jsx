import styles from './favorite-cards-page.module.css';

import FavoriteLinkCardsElement from 'components/favoriteLinkCards/favoriteLinkCards';

const FavoriteCardsPage = () => {
  return (
    <div className={styles.cardsListContainer}>
      <h1>Favorite</h1>
      <FavoriteLinkCardsElement />
    </div>
  );
};

export default FavoriteCardsPage;
