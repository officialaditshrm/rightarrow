import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
function Signin() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div id="login">
      <h1>SignIn</h1>
      <form className="panel" style={{margin: "50px auto"}} onSubmit={handleSubmit}>
        <h2>Log into Your Account</h2>
        <input type="text" name="username" placeholder="Username" required  /><br />
        <input type="password" name="password" placeholder="Password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br /><br />
        <button type="submit" className="next">Next</button>
        <Link className="signinlinks" to="/signup">Don't have an account? Sign Up here.</Link>
        <Link className="signinlinks" to="/forgotpassword">Forgot Password?</Link>
      </form>
      <Footer/>
    </div>
  );
}

export default Signin;