import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Users.css';

const UserList = () => {

  const users = useSelector((state) => (state.userReducer));
  console.log(users);
  return (
    <div className='home-container-3'>
      <h1>Users</h1>
      <div className='user-List-container'>
      {
        users.map((user) => (
            <Link to={`/Users/${user._id}`} key={user._id} className='userList-Profile'>
            <h3>{user.name.charAt(0).toUpperCase()}</h3>
            <h5>{user.name}</h5>
            </Link>
        ))
        }
        </div>
      </div>
  )
}

export default UserList