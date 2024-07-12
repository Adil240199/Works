import React from "react";
import PreLoader from "../../common/preLoader/preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        <PreLoader />
    }

    return (
        <div>
            <div className="descriptionBlock">
              <img src={props.profile.photos.large} alt="ava" />
            </div>

        </div>
    )
}

export default ProfileInfo