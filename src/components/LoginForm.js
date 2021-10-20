import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from '../helpers/requests';
import '../assets/styles/modal.css';

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
    <div className="modal">
      <form onSubmit={handleLogin} className="LoginForm modal-content">
        <h3 className="title">LOG IN</h3>
        <input name="username" type="text" placeholder="username" onChange={handleChange} />
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
        <div className="buttons">
          <button className="action" type="submit">Login</button>
          <button className="cancel" type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default LoginForm;
