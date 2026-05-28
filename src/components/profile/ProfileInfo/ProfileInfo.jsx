import React from "react";
import PreLoader from "../../common/preLoader/preloader";
import ProfileStatus from "./ProfileStatus"
import s from "./ProdileInfo.module.scss";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <PreLoader />;
  }

  return (
    <div className={s.wrapperProfile}>
        {props.profile.photos.large ? (
          <img src={props.profile.photos.large} alt={props.profile.fullName} />
        ) : (
          <div className={s.avatarFallback}>{props.profile.fullName?.slice(0, 1) || "A"}</div>
        )}
        <div className={s.profileText}>
          <p>Teacher profile</p>
          <h1>{props.profile.fullName || "Profile"}</h1>
        </div>
        <div className={s.wrapperStatus}>
          <h3>Status</h3>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
  );
};

export default ProfileInfo;
