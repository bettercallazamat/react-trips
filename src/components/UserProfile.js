import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../actions/user';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { sendFeedbackAction } from '../actions/feedback';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser);
  const [loginProcess, setLoginProcess] = useState(false);
  const [signupProcess, setSignupProcess] = useState(false);

  const openLogin = () => {
    setLoginProcess(true);
  };

  const closeLogin = () => {
    setLoginProcess(false);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully logged out.' }));
  };

  const openSignup = () => {
    setSignupProcess(true);
  };

  const closeSignup = () => {
    setSignupProcess(false);
  };

  return (
    <div className="UserProfile">
      {loginProcess
        ? <LoginForm onCancel={closeLogin} />
        : null }
      {signupProcess
        ? <SignupForm onCancel={closeSignup} />
        : null }
      {userData.username
        ? (
          <div className="UserProfile">
            <Link to="/profile">{userData.username}</Link>
            <button className="logout btn" type="button" name="logout" onClick={handleLogout}>LOGOUT</button>
          </div>
        )
        : (
          <div className="UserProfile">
            <button className="login btn" type="button" onClick={openLogin}>LOGIN</button>
            <button className="signup btn" type="button" onClick={openSignup}>SIGN UP</button>
          </div>
        )}
    </div>
  );
};

export default UserProfile;
