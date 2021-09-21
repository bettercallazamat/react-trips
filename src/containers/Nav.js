import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';

const Nav = () => {
  const userData = useSelector((state) => state.currentUser);
  console.log(userData);
  const [loginProcess, setLoginProcess] = useState(false);

  const openLogin = () => {
    setLoginProcess(true);
  };

  const closeLogin = () => {
    setLoginProcess(false);
  };

  return (
    <div className="Nav">
      { loginProcess
        ? <LoginForm onCancel={closeLogin} />
        : null }
      { userData.username
        ? (
          <div>
            <span>{userData.username}</span>
            <button type="button" name="logout">LOGOUT</button>
          </div>
        )
        : (
          <div>
            <button type="button" onClick={openLogin}>LOGIN</button>
            <button type="button">SIGN IN</button>
          </div>
        )}
    </div>
  );
};

export default Nav;
