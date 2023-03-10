import "./ProfilePage.css";

import React, { useState } from "react";

function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="card">
      <div className="img">
        <img src="profile.png" alt="profile" />
      </div>
      <div className="infos">
        <div className="name">
          <h2>Ashutosh</h2>
          <h4>programmer</h4>
        </div>
        <p className="text">I’m a front end developer and UI/UX Designer</p>
        <ul className="status">
          <li>
            <h3>118k</h3>
            <h4>followers</h4>
          </li>
          <li>
            <h3>21</h3>
            <h4>following</h4>
          </li>
        </ul>
        <div className="links">
          <button className="follow" onClick={handleFollowClick}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
          <button className="view">View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
