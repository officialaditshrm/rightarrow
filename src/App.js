import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import AboutPage from './pages/AboutPage';
import SigninPage from './pages/SigninPage';
import ProfilePage from './pages/ProfilePage';
function App(){  
  return (
    <Router>
      <Routes>
        <Route path="/rightarrow" element={<SigninPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
export default App;
