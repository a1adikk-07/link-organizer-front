import MyLinkCards from 'components/MyLinkCards/MyLinkCards';

import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div className={styles.HomePageDiv}>
      <MyLinkCards />
    </div>
  );
};

export default HomePage;
