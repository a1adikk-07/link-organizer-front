import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrublicRoute from './components/PrublicRoute/PrublicRoute';

// Pages
const RegisterPage = lazy(() => import('pagess/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pagess/LoginPage/LoginPage'));

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
        <Route element={<PrublicRoute />}>
          <Route path="signup" element={<RegisterPage />} />
          <Route path="signin" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="cards" element={<AddCardPage />} />
          <Route path="favorite" element={<FavoriteCardsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
