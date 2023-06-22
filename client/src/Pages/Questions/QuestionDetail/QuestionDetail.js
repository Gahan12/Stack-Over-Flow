import React from 'react';
import LeftSideBar from '../../../Components/LeftSideBar/LeftSideBar';
import QuestionPage from '../../../Components/QuestionPage/QuestionPage';
import RightSideBar from '../../../Components/RightSideBar/RightSideBar';

const QuestionDetail = () => {
  return (
    <div className='container'>
      <LeftSideBar />
      <QuestionPage />
      <RightSideBar />
      </div>
  )
}

export default QuestionDetail