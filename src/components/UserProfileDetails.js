import React from "react";
import Profile from "../components/Assets/Images/Profile.JPG";
import "../App.css";

function UserProfileDetails() {
  const UserDisplayPicture = () => (
    <div>
      <img src={Profile} alt="profile" className="profile-picture-circle" />
    </div>
  );

  const userName = "Gerald OA";

  const showDate = () => {
    // create arr for the Months of year
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentDate = new Date();
    // set month to  produce short of eg. Jan, Feb, Mar
    const month = months[currentDate.getMonth()].slice(0, 3);
    // get the full year eg 2023
    const year = currentDate.getFullYear();
    // get the date of the  month.
    const date = currentDate.getDate();
    const time = currentDate.toLocaleTimeString();

    return `${month} ${date}, ${year}`;
  };

  return (
    <div>
      
      <div className="user-details-container">
        <div>
          <UserDisplayPicture />
        </div>
        <div className="userName-container">
          <p>Hello<br></br><span id="userName">{userName}</span></p>
        </div>
      </div>
      <div className="date-container">
        
      </div>
    </div>
  );
}

export default UserProfileDetails;
