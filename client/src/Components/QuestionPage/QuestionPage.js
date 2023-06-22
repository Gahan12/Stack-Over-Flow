import React from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./QuestionPage.css";
import upVote from "../images/upvote.png";
import downVote from "../images/downvote.png";
import Avatar from "../avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { postAnswer, deleteQuestion, deleteAnswer, updateVotes } from "../../actions/askQuestion";
import momemt from 'moment';
import copy from 'copy-to-clipboard';

const QuestionPage = () => {
  const { id } = useParams();

  const [ans, setAns] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = 'http://localhost:3000/';

  const { data } = useSelector((state) => state.questionsReducer);
  let questionLis = null;
  if (data) questionLis = data.data;

  let user = useSelector((state) => state.currentUserReducer);

  const handlePostAns = (e,answerLength) => {
    e.preventDefault();
    if (user == null) {
      alert('Please singUp or logIn first');
      navigate('/Auth');
    }
    else {
      if (ans === '') alert('Please write ans');
      else {
        dispatch(postAnswer({ id, noOfAns: answerLength + 1, answerBody: ans, userAnswered: user.result.name, userId: user?.result?._id }));
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert('Copied url: ' + url + location.pathname);
  }

  const handleDeleteQuestion = () => {
    dispatch(deleteQuestion(id, navigate));
  }

  const handleDeleteAnswer = (answerLength, answerId) => {
    dispatch(deleteAnswer(id, answerLength - 1, answerId ));
  }

  const handleUpVote = () => {
    dispatch(updateVotes(id, 'upVote', user?.result?._id));
  }

  const handleDownVote = () => {
    dispatch(updateVotes(id, 'downVote', user?.result?._id));
  }

  return (
    <div className="container4">
      {questionLis === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionLis.map((question, key) => {
            if (question._id == id) {
              return (
                <div className="container5" key={key}>
                  <div className="ans-block-first">
                    <div className="ans-block-first-title">
                      {question.questionTitle}
                    </div>
                    <div className="ans-block-first-votes">
                      <div className="vote1">
                        <img src={upVote} onClick={handleUpVote} />
                        <p>{question.upVote.length - question.downVote.length}</p>
                        <img src={downVote} onClick={handleDownVote} />
                      </div>
                      <div className="ans-block-first-body">
                        <p>{question.questionBody}</p>
                        <label>
                          {question.questionTags.map((tag, key) => (
                            <p key={key}>{tag}</p>
                          ))}
                        </label>
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {
                            user?.result?._id == question?.userId && (
                              <button type="button" onClick={handleDeleteQuestion}>Delete</button>
                            )
                          }
                        </div>
                      </div>
                      <div className="ans-block-first-asked">
                        <p>asked {momemt(question.postedOn).fromNow()}</p>
                        <Link
                          to={`/user/${question._id}`}
                          className="ans-block-first-asked-0"
                        >
                          <div>
                            <Avatar
                              name={question.userPosted[0].toUpperCase()}
                              radius="5%"
                              height="4vh"
                              width="4vh"
                              font="3vh"
                              color="lightgreen"
                            />
                          </div>
                          <p>{question.userPosted}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="total-ans">{question.noOfAns} Answers</div>
                  {question.answer.map((detail, key) => {
                    return (
                      <div className="ans-block-second" key={key}>
                        <div className="ans-block-second-1">
                          <p>{detail.answerBody}</p>
                          <div>
                            <button type="button" onClick={handleShare}>Share</button>
                            { 
                              user?.result?._id == detail?.userId && (
                                <button type="button" onClick={() => { handleDeleteAnswer(question.answer.length, detail._id) }}>Delete</button>
                              )
                            }
                          </div>
                        </div>
                        <div className="ans-block-second-2">
                          <p>answered {momemt(detail.answeredOn).fromNow()}</p>
                          <Link
                            to={`/user/${question._id}`}
                            className="ans-block-second-asked-0"
                          >
                            <div>
                              <Avatar
                                name={detail.userAnswered[0].toUpperCase()}
                                radius="5%"
                                height="4vh"
                                width="4vh"
                                font="3vh"
                                color="skyblue"
                              />
                            </div>
                            <p>{detail.userAnswered}</p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                  <div className="ans-block-third">
                    <h3>Your Answer</h3>
                    <form onSubmit={(e) => { handlePostAns(e,question.answer.length) }}>
                      <textarea
                        type="text"
                        onChange={(e) => {
                          setAns(e.target.value);
                        }}
                      />
                      <button type="submit">Post Your Answer</button>
                    </form>
                    <p>
                      Browse other question tagged{" "}
                      {question.questionTags.map((tag, key) => {
                        return (
                          <span key={key} className="ans-block-third-tags">
                            {" "}
                            {tag}
                          </span>
                        );
                      })}{" "}
                      or{" "}
                      <span style={{ color: "#009dff", cursor: "pointer" }}>
                        asked your own questions.
                      </span>
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default QuestionPage;
