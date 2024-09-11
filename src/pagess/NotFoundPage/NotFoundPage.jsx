import styles from './not-found-page.module.css';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h2>Not found 404</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
