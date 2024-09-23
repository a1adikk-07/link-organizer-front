import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.navbarAuth}>
      <NavLink to="/signup" className={styles.link}>
        Sign up
      </NavLink>
      <p className={styles.separation}>|</p>
      <NavLink to="/signin" className={styles.link}>
        Sign in
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
