import { Component } from 'react';
import { nanoid } from 'nanoid';

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
};

class LinkCardsForm extends Component {
  linkCardsTitle = nanoid();
  firstLinkName = nanoid();
  firstLink = nanoid();
  secondLinkName = nanoid();
  secondLink = nanoid();
  thirdLinkName = nanoid();
  thirdLink = nanoid();
  fourthLinkName = nanoid();
  fourthLink = nanoid();

  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const {
      linkCardsTitle,
      firstLinkName,
      firstLink,
      secondLinkName,
      secondLink,
      thirdLinkName,
      thirdLink,
      fourthLinkName,
      fourthLink,
      handleSubmit,
      handleChange,
    } = this;

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
    } = this.state;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          {/*========================= TITLE =========================*/}
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
          {/*========================= FIRST LINK =========================*/}

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

          {/*========================= SECOND LINK =========================*/}

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

          {/*========================= THIRD LINK =========================*/}

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

          {/*========================= FOURTH LINK =========================*/}

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
        </div>
        <button className={styles.addButton}>+Add</button>
      </form>
    );
  }
}

export default LinkCardsForm;
