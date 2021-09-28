import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestSignup } from '../helpers/requests';
import '../assets/styles/modal.css';

const SignupForm = ({ onCancel }) => {
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
    requestSignup(dispatch, userCred.username, userCred.password, userCred.passwordConfirmation);
    e.preventDefault();
    e.target.reset();
    onCancel();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignin} className="SignupForm modal-content">
        <h3 className="title">SIGN UP</h3>
        <input name="username" type="text" placeholder="username" onChange={handleChange} />
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
        <input name="password_confirmation" type="password" placeholder="password confirmation" onChange={handleChange} />
        <div className="buttons">
          <button type="submit" className="action">SIGN UP</button>
          <button type="button" className="cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default SignupForm;
