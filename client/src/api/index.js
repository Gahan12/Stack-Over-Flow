import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
/*
API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
})*/

export const logIn = async(authData) => {
    return await API.post('/user/login', authData);
}
export const signUp = async(authData) => {
    return await API.post('/user/signup', authData);
}
export const fetchAllUsers = async () => {
    return await API.get('/user/getAllUsers');
}
export const updateProfile = async (id, data) => {
    return await API.patch(`/user/update/${id}`, data);
}

export const questionPost = async(questionData) => {
    return await API.post('/questions/Ask', questionData);
}
export const getAllQuestions = async() => {
    return await API.get('/questions/get');
}
export const deleteQuestion = async (id) => {
    return await API.delete(`/questions/delete/${id}`);
}
export const vote = async (id, value, userId) => {
    return await API.patch(`/questions/vote/${id}`, { value, userId });
}

export const postAnswers = async (id, noOfAns, answerBody, userAnswered, userId) => {
    return await API.patch(`/answer/post/${id}`, { noOfAns, answerBody, userAnswered, userId });
}
export const deleteAnswer = async (id, noOfAns, answerId) => {
    return await API.patch(`/answer/delete/${id}`, { answerId, noOfAns });
}