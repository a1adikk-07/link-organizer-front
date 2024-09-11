import { memo, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

// import useForm from 'hooks/useForm';

import styles from './link-cards-form.module.css';

const INITIAL_STATE = {
  title: '',
  firstName: '',
  oneLink: '',
  secondName: '',
  twoLink: '',
  thirdName: '',
  threeLink: '',
  fourthName: '',
  fourLink: '',
  favorite: false,
};

const LinkCardsForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const linkCardsTitle = useMemo(() => nanoid(), []);
  const firstLinkName = useMemo(() => nanoid(), []);
  const firstLink = useMemo(() => nanoid(), []);
  const secondLinkName = useMemo(() => nanoid(), []);
  const secondLink = useMemo(() => nanoid(), []);
  const thirdLinkName = useMemo(() => nanoid(), []);
  const thirdLink = useMemo(() => nanoid(), []);
  const fourthLinkName = useMemo(() => nanoid(), []);
  const fourthLink = useMemo(() => nanoid(), []);
  const cardsFavoriteId = useMemo(() => nanoid(), []);

  const {
    title,
    firstName,
    oneLink,
    secondName,
    twoLink,
    thirdName,
    threeLink,
    fourthName,
    fourLink,
    favorite,
  } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <div>
          <label className={styles.label} htmlFor={linkCardsTitle}>
            Title for card
          </label>
          <input
            className={styles.inputs}
            value={title}
            required
            name="title"
            onChange={handleChange}
            id={linkCardsTitle}
            type="text"
            placeholder="Enter title..."
          />
        </div>

        <div>
          <label className={styles.label} htmlFor={firstLinkName}>
            Link name
          </label>
          <input
            className={styles.inputs}
            required
            value={firstName}
            name="firstName"
            onChange={handleChange}
            id={firstLinkName}
            type="text"
            placeholder="Enter name for link..."
          />
          <label className={styles.label} htmlFor={firstLink}>
            Link
          </label>
          <input
            className={styles.inputs}
            required
            value={oneLink}
            name="oneLink"
            onChange={handleChange}
            id={firstLink}
            type="text"
            placeholder="Enter link..."
          />
        </div>

        <div>
          <label className={styles.label} htmlFor={secondLinkName}>
            Link name
          </label>
          <input
            className={styles.inputs}
            value={secondName}
            name="secondName"
            onChange={handleChange}
            id={secondLinkName}
            type="text"
            placeholder="Enter name for link..."
          />
          <label className={styles.label} htmlFor={secondLink}>
            Link
          </label>
          <input
            className={styles.inputs}
            value={twoLink}
            name="twoLink"
            onChange={handleChange}
            id={secondLink}
            type="text"
            placeholder="Enter link..."
          />
        </div>

        <div>
          <label className={styles.label} htmlFor={thirdLinkName}>
            Link name
          </label>
          <input
            className={styles.inputs}
            value={thirdName}
            name="thirdName"
            onChange={handleChange}
            id={thirdLinkName}
            type="text"
            placeholder="Enter name for link..."
          />
          <label className={styles.label} htmlFor={thirdLink}>
            Link
          </label>
          <input
            className={styles.inputs}
            value={threeLink}
            name="threeLink"
            onChange={handleChange}
            id={thirdLink}
            type="text"
            placeholder="Enter link..."
          />
        </div>

        <div>
          <label className={styles.label} htmlFor={fourthLinkName}>
            Link name
          </label>
          <input
            className={styles.inputs}
            value={fourthName}
            name="fourthName"
            onChange={handleChange}
            id={fourthLinkName}
            type="text"
            placeholder="Enter name for link..."
          />
          <label className={styles.label} htmlFor={fourthLink}>
            Link
          </label>
          <input
            className={styles.inputs}
            value={fourLink}
            name="fourLink"
            onChange={handleChange}
            id={fourthLink}
            type="text"
            placeholder="Enter link..."
          />
        </div>
        <div>
          <label className={styles.checkboxText} htmlFor={cardsFavoriteId}>
            Favorite
          </label>
          <input
            className={styles.checkboxBtn}
            type="checkbox"
            checked={favorite}
            name="favorite"
            onChange={handleChange}
            id={cardsFavoriteId}
          />
        </div>
      </div>
      <button className={styles.addButton}>+Add</button>
    </form>
  );
};

export default memo(LinkCardsForm);
