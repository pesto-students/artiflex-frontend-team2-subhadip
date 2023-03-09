import React from "react";
import "./profilePage.css";




const profilePage = () => {
  return (
    <>
      <div>profilePage</div>
    </>
  );
}

export default profilePage;

// import React, { useState } from 'react';
// import './ProfileSection.css';
// import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// const ProfileSection = () => {
//   const [image, setImage] = useState('');
//   const [bio, setBio] = useState('');
//   const [social, setSocial] = useState({
//     instagram: '',
//     twitter: '',
//     linkedin: '',
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size > 10000000) {
//       console.log('File is too large. Maximum file size is 10 MB.');
//       return;
//     }
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleBioChange = (e) => {
//     setBio(e.target.value);
//   };

//   const handleSocialChange = (e) => {
//     const { name, value } = e.target;
//     setSocial((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="profile-section">
//       <h2>Profile Section</h2>
//       <div className="avatar">
//         {image ? (
//           <img src={image} alt="avatar" />
//         ) : (
//           <div className="default-avatar">Upload Image</div>
//         )}
//         <input type="file" id="image-upload" onChange={handleImageChange} accept="image/*" />
//       </div>
//       <div className="image-upload-info">Max file size: 10 MB</div>
//       <div className="bio">
//         <label htmlFor="bio">Bio:</label>
//         <textarea id="bio" onChange={handleBioChange} value={bio} />
//       </div>
//       <div className="social">
//         <div className="social-item">
//           <FaInstagram />
//           <input type="text" id="instagram" name="instagram" onChange={handleSocialChange} value={social.instagram} placeholder="Instagram handle" />
//         </div>
//         <div className="social-item">
//           <FaTwitter />
//           <input type="text" id="twitter" name="twitter" onChange={handleSocialChange} value={social.twitter} placeholder="Twitter handle" />
//         </div>
//         <div className="social-item">
//           <FaLinkedin />
//           <input type="text" id="linkedin" name="linkedin" onChange={handleSocialChange} value={social.linkedin} placeholder="LinkedIn handle" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;
