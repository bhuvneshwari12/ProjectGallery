import React from 'react';
import myPic from '../../Assests/IMG_20240407_101704.jpg';
import './ProfileCard.css'; // Import CSS file

const ProfileCard = () => {
  return (
    <div className="profile-card-container">
      <div className="profile-info">
        <div className="profile-img-container">
          <img src={myPic} alt="Profile" className="profile-img" />
        </div>
        <p className="profile-name">Bhuvneshwari Sharma </p>
      </div>
    </div>
  );
};
export default ProfileCard;