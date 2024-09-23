import { useSelector } from 'react-redux';

import MainMenu from './MainMenu/MainMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { Link } from 'react-router-dom';

import { selectAuthIsLogin } from '../../redux/auth/auth-selectors';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  return (
    <div className={styles.navbar}>
      <Link to="/">Logo</Link>
      <MainMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
