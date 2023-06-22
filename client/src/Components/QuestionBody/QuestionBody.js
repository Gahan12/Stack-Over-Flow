import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionBody.css';
import moment from 'moment';

const QuestionBody = (props) => {
  return (
      <div className='display-ans-container'>
          <div className='display-votes'>
              <p>{props.questions.upVote.length-props.questions.downVote.length}</p>
              <p>votes</p>
          </div>
          <div className='display-ans'>
              <p>{props.questions.noOfAns}</p>
              <p>answers</p>
          </div>
          <div className='display-detail'>
              <Link to={`/Questions/${props.questions._id}`} className='question-title'>{ props.questions.questionTitle }</Link>
              <div className='display-tags'>
                  {
                      props.questions.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                      ))
                  }
              </div>
          </div>
          <div className='display-time'>
              asked {moment(props.questions.postedOn).fromNow()} by {props.questions.userPosted}
          </div>
      </div>
  )
}

export default QuestionBody