import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import logo from '../assets/images/logo.png';
import githubIcon from '../assets/images/github-icon.png';
import linkedinIcon from '../assets/images/linkedin-icon.png';
import '../assets/styles/Nav.css';

const Nav = () => (
  <div className="NavWrapper">
    <nav className="nav">
      <div className="main">
        <Link to="/" title="Home Page">
          <img alt="logo" src={logo} />
        </Link>
        <UserProfile />
      </div>
      <div className="sections">
        <Link to="/" title="Home Page">
          <p>Trips</p>
        </Link>
      </div>
      <div className="socials">
        <a href="https://github.com/bettercallazamat" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github" /></a>
        <a href="https://www.linkedin.com/in/azamat-nuriddinov/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
      </div>
    </nav>
  </div>
);

export default Nav;
