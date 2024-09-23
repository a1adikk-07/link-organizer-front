import { useState, useId } from 'react';

import styles from './register-form.module.css';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
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

  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { username, email, password } = state;

  return (
    <form className={styles.userForm} onSubmit={handleSubmit}>
      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor={usernameId}>
          Name
        </label>
        <input
          id={usernameId}
          value={username}
          onChange={handleChange}
          className={styles.input}
          type="text"
          name="username"
          placeholder="Enter name..."
          required
        />
      </div>
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
