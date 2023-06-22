import React from 'react';
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import HomeMainBar from '../../Components/HomeMainBar/HomeMainBar';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';
import './Questions.css';

const Questions = () => {
  return (
    <div className='container'>
      <LeftSideBar />
      <HomeMainBar />
      <RightSideBar />
      </div>
  )
}

export default Questions;