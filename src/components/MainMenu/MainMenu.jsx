import styles from './main-menu.module.css';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to="/" className={styles.linkPage}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/form" className={styles.linkPage}>
          +Add
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorite" className={styles.linkPage}>
          Favorite
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
