import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import Avatar from "../../Components/avatar/Avatar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import ProfileFormBio from "./ProfileFormBio";
import "./userProfile.css";

const UserProfile = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.userReducer);
  const curProfile = users.filter((user) => user._id === id)[0];
  const curUser = useSelector((state) => state.currentUserReducer);

  const [sw, setSw] = useState(false);

  const handleEditbtn = () => {
    setSw(true);
  };

  return (
    <div className="home-container-1">
      <LeftSideBar />
      {curProfile ? (
        <div className="home-container-2">
          <section>
            <div className="user-detail-container">
              <div className="user-detail">
                <div className="user-detail-0">
                  <Avatar
                    name={curProfile.name[0].toUpperCase()}
                    radius="2px"
                    height="100px"
                    width="100px"
                    font="70px"
                    color="purple"
                  />
                  <div className="user-name">
                    <h1>{curProfile.name}</h1>
                    <p>
                      <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                      {moment(curProfile.joinOn).fromNow()}
                    </p>
                  </div>
                </div>
                {(curUser.result._id === id && sw===false) && (
                  <button className="edit-profile-btn" onClick={handleEditbtn}>
                    <FontAwesomeIcon icon={faPen} /> Edit Profile
                  </button>
                )}
              </div>
              <>
                {sw ? (
                  <EditProfileForm curUser={curUser} setSw={setSw} />
                ) : (
                  <ProfileFormBio curProfile={curProfile} />
                )}
              </>
            </div>
          </section>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UserProfile;
