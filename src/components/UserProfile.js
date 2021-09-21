import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../actions/user';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser);
  console.log(userData);
  const [loginProcess, setLoginProcess] = useState(false);
  const [signinProcess, setSigninProcess] = useState(false);

  const openLogin = () => {
    setLoginProcess(true);
  };

  const closeLogin = () => {
    setLoginProcess(false);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const openSignin = () => {
    setSigninProcess(true);
  };

  const closeSignin = () => {
    setSigninProcess(false);
  };

  return (
    <div className="UserProfile">
      {loginProcess
        ? <LoginForm onCancel={closeLogin} />
        : null }
      {signinProcess
        ? <SigninForm onCancel={closeSignin} />
        : null }
      {userData.username
        ? (
          <div>
            <span>{userData.username}</span>
            <button type="button" name="logout" onClick={handleLogout}>LOGOUT</button>
          </div>
        )
        : (
          <div>
            <button type="button" onClick={openLogin}>LOGIN</button>
            <button type="button" onClick={openSignin}>SIGN IN</button>
          </div>
        )}
    </div>
  );
};

export default UserProfile;
