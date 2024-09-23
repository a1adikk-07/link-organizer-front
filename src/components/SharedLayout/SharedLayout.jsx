import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from 'components/Navbar/Navbar';

import styles from './loading-animation.module.css';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className={styles.loader}></div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
