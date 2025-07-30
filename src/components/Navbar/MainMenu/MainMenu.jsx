import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthIsLogin } from '../../../redux/auth/auth-selectors';

import menuItems from './menuItems';

import styles from './main-menu.module.css';

const MainMenu = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  const filteredMenu = !isLogin ? menuItems.filter(item => !item.private) :menuItems;

  const elements = filteredMenu.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.linkPage} to={to}>{text}</NavLink>
    </li>
  ))

  return (
    <ul className={styles.menu}>
      {elements}
    </ul>
  );
};

export default MainMenu;
