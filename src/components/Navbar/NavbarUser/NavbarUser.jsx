import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { username } = useSelector(selectUser);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout())
  
  return (
    <div className={styles.userNavbar}>
      {username}
      <button onClick={onLogout} type="button" className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
