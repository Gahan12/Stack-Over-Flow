import React from "react";
import './userProfile.css';

const ProfileFormBio = ({ curProfile }) => {
  return (
    <div>
      <div>
        {curProfile.tags.length !== 0 ? (
          <div>
            <h4>Tags watched</h4>
            {curProfile.tags.map((tag) => (
              <p key={tag} style={{margin: '0px'}}>{tag}</p>
            ))}
          </div>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {curProfile.about ? (
          <div>
            <h4>About</h4>
            <p>{curProfile.about}</p>
          </div>
        ) : (
          <p>No Bio Found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileFormBio;
