import { useDispatch, useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

import {
  selectAuthIsLoading,
  selectAuthError,
  selectAuthIsLogin,
} from '../../redux/auth/auth-selectors';

import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import styles from './pegister-page.module.css';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <div className={styles.registration}>
        <h1>Sign Up page</h1>
        {authLoading && <p>...Register in progress</p>}
        <RegisterForm onSubmit={handleSignup} />
        {authError && <p style={{ color: 'red' }}>{authError}</p>}
      </div>
    </main>
  );
};

export default RegisterPage;
