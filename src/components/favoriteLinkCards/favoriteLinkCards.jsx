import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import {
  fetchLinkCards,
  deleteLinkCard,
} from '../../redux/linkCards/link-cards-operations';

import LinkCardsList from 'components/MyLinkCards/LinkCardsList/LinkCardsList';

import { selectFavoriteLinkCards } from '../../redux/linkCards/cards-selectors';

import styles from './favoriteLinkCards.module.css';

const FavoriteLinkCardsElement = () => {
  const items = useSelector(selectFavoriteLinkCards);

  // const elements = items.map(
  //   ({
  //     id,
  //     title,
  //     firstName,
  //     oneLink,
  //     secondName,
  //     twoLink,
  //     thirdName,
  //     threeLink,
  //     fourthName,
  //     fourLink,
  //   }) => (
  //     <li key={id} className={styles.card}>
  //       <div className={styles.cardsTitleDiv}>
  //         <h3 className={styles.cardsTitle}>{title}</h3>
  //       </div>
  //       <ul className={styles.cardsList}>
  //         <li>
  //           <a
  //             href={oneLink}
  //             target="_blank"
  //             rel="noreferrer noopener"
  //             className={styles.link}
  //           >
  //             {firstName}
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href={twoLink}
  //             target="_blank"
  //             rel="noreferrer noopener"
  //             className={styles.link}
  //           >
  //             {secondName}
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href={threeLink}
  //             target="_blank"
  //             rel="noreferrer noopener"
  //             className={styles.link}
  //           >
  //             {thirdName}
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href={fourLink}
  //             target="_blank"
  //             rel="noreferrer noopener"
  //             className={styles.link}
  //           >
  //             {fourthName}
  //           </a>
  //         </li>
  //       </ul>
  //     </li>
  //   )
  // );

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

export default FavoriteLinkCardsElement;
