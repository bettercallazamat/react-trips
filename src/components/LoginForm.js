import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from '../helpers/requests';

const LoginForm = ({ onCancel }) => {
  const [userCred, setUserCred] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  let username;
  let password;

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      username = e.target.value;
      setUserCred((state) => ({ ...state, username }));
    }
    if (e.target.name === 'password') {
      password = e.target.value;
      setUserCred((state) => ({ ...state, password }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    requestLogin(dispatch, userCred.username, userCred.password);
    e.target.reset();
    onCancel();
  };

  return (
    <form onSubmit={handleLogin} className="LoginForm">
      <input name="username" type="text" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button type="submit">Login</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

LoginForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default LoginForm;
