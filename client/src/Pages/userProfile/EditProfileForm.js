import React from "react";
import { useState } from "react";
import "./userProfile.css";
import { updateProfile } from "../../actions/users";
import { useDispatch } from "react-redux";

const EditProfileForm = ({ curUser, setSw }) => {
  const [name, setName] = useState(curUser.name);
  const [about, setAbout] = useState(curUser.about);
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length === 0) {
      dispatch(
        updateProfile(curUser.result._id, {
          name,
          about,
          tags: curUser.result.tags,
        })
      );
    } else {
      let t = [],
        c = "";
      for (let i = 0; i < tags.length; i++) {
        if (tags[i] !== " ") {
          c += tags[i];
        } else {
          t.push(c);
          c = "";
        }
      }
      if (c !== "") t.push(c);
      console.log(t);
      dispatch(updateProfile(curUser.result._id, { name, about, tags: t }));
    }
    setSw(false);
  };

  return (
    <div>
      <h1 className="edit-profile-title-1">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public Information</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About Me</h3>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          <h3>Watched Tags</h3>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <div className="edit-btns">
          <input
            type="submit"
            value="Save Profile"
            className="user-submit-btn"
          />
          <button
            type="button"
            onClick={() => {
              setSw(false);
            }}
            className="user-cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
