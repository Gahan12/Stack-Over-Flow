import React from "react";
import "./HomeMainBar.css";
import { Link, useLocation } from "react-router-dom";
import QuestionBody from "../QuestionBody/QuestionBody.js";
import { useSelector } from "react-redux";

const HomeMainBar = () => {

  let user = 1;

  const { data } = useSelector(state => state.questionsReducer);
  let questionLis = null;
  if(data) questionLis = data.data;

  let questionList = [
    {
      id: 1,
      upVotes: 3,
      downVotes: 0,
      noOfAns: 2,
      questionTitle: "what is a function",
      questionBody: "It mean to be",
      questionTags: ["java", "react.js", "node.js", "mongo"],
      userPosted: "mano",
      postedOn: "jan",
    },
    {
      id: 1,
      upVotes: 3,
      downVotes: 0,
      noOfAns: 2,
      questionTitle: "what is a function",
      questionBody: "It mean to be",
      questionTags: ["java", "react.js", "node.js", "mongo"],
      userPosted: "mano",
      postedOn: "jan",
    },
    {
      id: 1,
      upVotes: 3,
      downVotes: 0,
      noOfAns: 2,
      questionTitle: "what is a function",
      questionBody: "It mean to be",
      questionTags: ["java", "react.js", "node.js", "mongo"],
      userPosted: "mano",
      postedOn: "jan",
    },
  ];

  const location = useLocation();
  return (
    <div className="container2">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <Link to='/AskQuestions' className="ask-btn">Ask Questions</Link>
      </div>
      <div>
        {
          questionLis === null ? <h1>Loading...</h1> :
            <>
              <p>{questionLis.length} questions</p>
                {
                  questionLis.map((questions,key) => (
                    <QuestionBody key={key} questions={questions} />
                  ))
                }
              </>
          }
      </div>
    </div>
  );
};

export default HomeMainBar;
