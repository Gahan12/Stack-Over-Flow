import React from "react";
import "./AskQuestions.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postQuestion } from "../../actions/askQuestion";

const AskQuestions = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questionTitle, setQuestionTitle] = useState();
  const [questionBody, setQuestionBody] = useState();
  const [questionTags, setQuestionTags] = useState();

  let user = useSelector((state) => (state.currentUserReducer));

  useEffect(() => {
    if (!user) window.location.pathname = "/Auth";
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(postQuestion({ questionTitle, questionBody, questionTags, userPosted: user.result.name, userId: user.result._id }, navigate));
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      setQuestionBody(questionBody + '/n');
    }
  }

  return (
    <div className="ask-question">
      <div className="ques-header">Ask a public question</div>
      <form onSubmit={submitHandle}>
        <div className="ask-ques-container">
          <div className="ques-title">
            <h4>Title</h4>
            <p>
              Be specific and imagine you're asking a question to another person
            </p>
            <input
              type="text"
              name="title"
              onChange={(e) => {
                setQuestionTitle(e.target.value);
              }}
              placeholder="e.g. Is there an R function for finding the  index of an element in vector?"
            />
          </div>
          <div className="ques-body">
            <h4>Body</h4>
            <p>
              Include all information someone would need to answer your question
            </p>
            <textarea
              type="text"
              name="body"
              onChange={(e) => {
                setQuestionBody(e.target.value);
              }}
              cols="30"
              rows="10"
              onKeyDown={handleKey}
            />
          </div>
          <div className="ques-tag">
            <h4>Tags</h4>
            <p>Add up to 5 tags to describe what your question is about</p>
            <input
              type="text"
              name="tags"
              onChange={(e) => {
                setQuestionTags(e.target.value.split(" "));
              }}
              placeholder="e.g. (xml typescriipt wordpress)"
            />
          </div>
        </div>
        <button type="submit" className="review-btn">
          Review your question
        </button>
      </form>
    </div>
  );
};

export default AskQuestions;
