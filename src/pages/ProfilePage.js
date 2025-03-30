import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import defaultProfilePic from '../images/profile.png';

function ProfilePage() {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <TopBar />
      <div className="panel">
        <h1>Your Profile</h1>
        <p style={{color:"white"}}>Here you can see your profile information:</p>
        <div>
        <img src={profilePic} alt="Profile" style={{width: '50px', height: '50px'}} />
          <input type="file" onChange={handleProfilePicChange} />
        </div>
        <ul style={{color:"white", padding:"20px"}}>
          <li style={{padding:"20px"}}>Name: Aditya Sharma</li>
          <li style={{padding:"20px"}}>Username: aditshrm</li>
          <li style={{padding:"20px"}}>Email: aditshrm@gmail.com</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;