import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserAction } from '../actions/user';

const SigninForm = ({ onCancel }) => {
  const [userCred, setUserCred] = useState({ username: '', password: '', passwordConfirmation: '' });
  const dispatch = useDispatch();

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
    e.preventDefault();
    dispatch(createUserAction(userCred));
    e.target.reset();
    onCancel();
  };

  return (
    <form onSubmit={handleSignin}>
      <input name="username" type="text" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <input name="password_confirmation" type="password" onChange={handleChange} />
      <button type="submit">SIGN IN</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

SigninForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default SigninForm;
