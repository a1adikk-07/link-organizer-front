import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

import {
  selectAuthIsLoading,
  selectAuthError,
  // selectAuthIsLogin,
} from '../../redux/auth/auth-selectors';

import { signin } from '../../redux/auth/auth-operations';

import LoginForm from "components/LoginForm/LoginForm";
import styles from "./login-page.module.css";

const LoginPage = () => {

  const authLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignin = data => {
    dispatch(signin(data));
  };

  return (
      <main>
        <div className={styles.registration}>
            <h1>Log in page</h1>  
            {authLoading && <p>...Register in progress</p>}
            <LoginForm onSubmit={handleSignin} />
            {authError && <p style={{ color: 'red' }}>{authError}</p>}
      </div>
      </main>
    )
}

export default LoginPage;