import styles from './link-cards-list.module.css';

const LinkCardsList = ({ items, deleteCard }) => {
  const elements = items.map(
    ({
      id,
      title,
      firstName,
      oneLink,
      secondName,
      twoLink,
      thirdName,
      threeLink,
      fourthName,
      fourLink,
    }) => (
      <li key={id} className={styles.card}>
        <h3 className={styles.cardsTitle}>{title}</h3>
        <ul className={styles.cardsList}>
          <li>
            <a href={oneLink} target="_blank" className={styles.link}>
              {firstName}
            </a>
          </li>
          <li>
            <a href={twoLink} target="_blank" className={styles.link}>
              {secondName}
            </a>
          </li>
          <li>
            <a href={threeLink} target="_blank" className={styles.link}>
              {thirdName}
            </a>
          </li>
          <li>
            <a href={fourLink} target="_blank" className={styles.link}>
              {fourthName}
            </a>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => deleteCard(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </li>
    )
  );
  return (
    <div className={styles.cardsListContainer}>
      <ul className={styles.cardList}>{elements}</ul>
    </div>
  );
};

export default LinkCardsList;
