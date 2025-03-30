import "../App.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div id="endbuttons">
        <div id="checkdiv">
            <Link id="careers" to="/dashboard">
                Dashboard
            </Link>
            <Link id="socials" to="/">
                Signin
            </Link>
            <Link id="youtube" to="/about">
                About
            </Link>
        </div>
        <div id="reportdiv">
            <Link id="report" to="/profile">
                Profile
            </Link>
        </div>
    </div>
  );
}
export default Footer;