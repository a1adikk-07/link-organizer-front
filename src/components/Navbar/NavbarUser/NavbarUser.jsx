import { useSelector } from 'react-redux';

import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { username } = useSelector(selectUser);
  return (
    <div className={styles.userNavbar}>
      {username}
      <button type="button" className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
