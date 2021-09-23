import PropTypes from 'prop-types';
import { useState } from 'react';
import { requestSignup } from '../helpers/requests';

const SignupForm = ({ onCancel }) => {
  const [userCred, setUserCred] = useState({ username: '', password: '', passwordConfirmation: '' });

  let username;
  let password;
  let passwordConfirmation;

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      username = e.target.value;
      setUserCred((state) => ({ ...state, username }));
    }
    if (e.target.name === 'password') {
      password = e.target.value;
      setUserCred((state) => ({ ...state, password }));
    }
    if (e.target.name === 'password_confirmation') {
      passwordConfirmation = e.target.value;
      setUserCred((state) => ({ ...state, passwordConfirmation }));
    }
  };

  const handleSignin = (e) => {
    requestSignup(userCred.username, userCred.password, userCred.passwordConfirmation);
    e.preventDefault();
    e.target.reset();
    onCancel();
  };

  return (
    <form onSubmit={handleSignin} className="SigninForm">
      <input name="username" type="text" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <input name="password_confirmation" type="password" onChange={handleChange} />
      <button type="submit">SIGN IN</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

SignupForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default SignupForm;
