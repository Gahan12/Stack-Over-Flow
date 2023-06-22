import React from 'react';
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import HomeMainBar from '../../Components/HomeMainBar/HomeMainBar';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';
import './Home.css';

const Home = () => {
  return (
    <div className='container'>
      <LeftSideBar />
      <HomeMainBar />
      <RightSideBar />
      </div>
  )
}

export default Home;