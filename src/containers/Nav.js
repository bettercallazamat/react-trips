import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import logo from '../assets/images/logo.png';
import '../assets/styles/Nav.css';

const Nav = () => (
  <div className="Nav">
    <Link to="/" title="Home Page">
      <img alt="logo" src={logo} />
    </Link>
    <UserProfile />
  </div>
);

export default Nav;
