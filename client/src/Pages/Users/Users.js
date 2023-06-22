import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import { useLocation } from "react-router-dom";
import UserList from "./UserList";
import './Users.css';

const Users = () => {
    const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        {location.pathname === "/Users" ? <UserList /> : <></>}
      </div>
    </div>
  );
};

export default Users;
