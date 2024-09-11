import styles from './home-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import LinkCardsList from 'components/MyLinkCards/LinkCardsList/LinkCardsList';
import { deleteLinkCard } from '../../redux/linkCards/link-cards-slice';

const HomePage = () => {
  const linkCards = useSelector(store => store.linkCards);

  const dispatch = useDispatch();

  const onDeleteCard = id => {
    dispatch(deleteLinkCard(id));
  };
  return (
    <div className={styles.HomePageDiv}>
      <LinkCardsList items={linkCards} deleteCard={onDeleteCard} />
    </div>
  );
};

export default HomePage;
