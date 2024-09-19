import { setFilter } from '../../redux/filter/filter-slice';
import { useDispatch } from 'react-redux';

import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <>
      <input
        className={styles.inputFilter}
        onChange={changeFilter}
        name="filter"
        placeholder="Search..."
      />
    </>
  );
};

export default Filter;
