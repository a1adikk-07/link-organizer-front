import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
// Pages
const HomePage = lazy(() => import('pagess/HomePage/HomePage'));
const AddCardPage = lazy(() => import('pagess/AddCardPage/AddCardPage'));
const FavoriteCardsPage = lazy(() =>
  import('pagess/FavoriteCardsPage/FavoriteCardsPage')
);
const NotFoundPage = lazy(() => import('pagess/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="form" element={<AddCardPage />} />
        <Route path="favorite" element={<FavoriteCardsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
