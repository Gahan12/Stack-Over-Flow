import * as api from "../api";

export const postQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.questionPost(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchQuestion());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchQuestion = () => async (dispatch) => {
  try {
    const data = await api.getAllQuestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAns, answerBody, userAnswered, userId } = answerData;
    const data = await api.postAnswers(
      id,
      noOfAns,
      answerBody,
      userAnswered,
      userId
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchQuestion());
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    const { data } = await api.deleteQuestion(id);
    dispatch(fetchQuestion());
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const deleteAnswer = (id, noOfAns, answerId) => async (dispatch) => {
  try {
    const { data } = await api.deleteAnswer(id, noOfAns, answerId);
    dispatch(fetchQuestion());
  } catch (err) {
    console.log(err);
  }
};

export const updateVotes = (id, value, userId) => async (dispatch) => {
  try {
    const { data } = await api.vote(id, value, userId);
    dispatch(fetchQuestion());
  } catch (err) {
    console.log(err);
  }
};
