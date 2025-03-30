import { Link } from 'react-router-dom';
import logo from '../images/logo-no-background.png';
function TopBar() {
    return (
      <div id="top">
        <div id="logo">
          <img src={logo} alt="logo" id="logo" />
        </div>
        <div id="topbar">
          <nav className="navbar">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
          </nav>
        </div>
      </div>
    );
}
export default TopBar;