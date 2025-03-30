import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import signupimage from "../images/logo-no-background.png"
function SignupPage(){
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  }
  return (
    <div id = "signuppage">
      <h1 style={{color: "white"}}>Signup</h1>
      <div id="signupdisplay">
        <img src={signupimage} alt="signupimage" id="signupimage"/>
        <form className="panel" onSubmit={handleSubmit}>
          <input type="text" placeholder="username" required /><br/>
          <input type="email" placeholder="Email" required /><br/>
          <input type="password" id="password" placeholder="Password" required /><br/>
          <button className="next" type="submit">Create</button>
          <Link to="/" className="signinlinks">Already have an account? Sign In here.</Link>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
export default SignupPage;