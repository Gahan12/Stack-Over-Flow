import './App.css';
import Nav from './Components/nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Questions from './Pages/Questions/Questions';
import AskQuestions from './Pages/AskQuestions/AskQuestions';
import QuestionDetail from './Pages/Questions/QuestionDetail/QuestionDetail';
import { useEffect } from 'react';
import { fetchQuestion } from './actions/askQuestion';
import { useDispatch } from 'react-redux';
import Tags from './Pages/Tags/Tags.js';
import Users from './Pages/Users/Users';
import { fetchAllUser } from './actions/users';
import UserProfile from './Pages/userProfile/userProfile';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestion());
    dispatch(fetchAllUser());
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path='/Questions' element={<Questions />} />
          <Route path='/AskQuestions' element={<AskQuestions />} />
          <Route path='/Questions/:id' element={<QuestionDetail />} />
          <Route path='/Tags' element={<Tags />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/Users/:id' element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
