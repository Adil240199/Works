import React from "react";
import PreLoader from "../../common/preLoader/preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <PreLoader />;
  }

  return (
    <div>
      <div style={{ padding: "10rem" }}>
        <img src={props.profile.photos.large} alt="ava" />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        <h1>Info</h1>
      </div>
    </div>
  );
};

export default ProfileInfo;
