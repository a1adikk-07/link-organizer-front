import { useState, useId } from 'react';

import styles from './login-form.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;

  return (
    <form className={styles.userForm} onSubmit={handleSubmit}>
      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor={emailId}>
          Email
        </label>
        <input
          id={emailId}
          value={email}
          onChange={handleChange}
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter email..."
          required
        />
      </div>
      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          id={passwordId}
          value={password}
          onChange={handleChange}
          className={styles.input}
          type="password"
          name="password"
          placeholder="Enter password..."
          required
        />
      </div>
      <button type="submit" className={styles.registerButton}>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
