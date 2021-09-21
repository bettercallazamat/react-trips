import UserProfile from '../components/UserProfile';
import logo from '../assets/images/logo.png';
import '../assets/styles/Nav.css';

const Nav = () => (
  <div className="Nav">
    <img alt="logo" src={logo} />
    <UserProfile />
  </div>
);

export default Nav;
