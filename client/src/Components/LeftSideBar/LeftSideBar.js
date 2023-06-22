import React, { useState, useEffect } from 'react';
import './LeftSideBar.css';
import { NavLink } from 'react-router-dom';
import globe from '../images/globe.jpg';

const LeftSideBar = () => {
  const [ms, setMs] = useState();
  const [qs, setQs] = useState();
  const [ts, setTs] = useState({ marginLeft: '19px' });
  const [us, setUs] = useState();

  useEffect(() => {
    if (window.location.pathname === '/Questions') {
      setQs({ backgroundColor: '#e1e1e1', borderRight: '3px solid #ef8236', fontWeight: 'bold' });
      setMs(undefined);
      setTs({ marginLeft: '19px' });
      setUs({ marginLeft: '23px' });
    } else if (window.location.pathname === '/Tags') {
      setTs({ backgroundColor: '#e1e1e1', borderRight: '3px solid #ef8236', fontWeight: 'bold', marginLeft: '19px' });
      setMs(undefined);
      setQs(undefined);
      setUs({ marginLeft: '23px' });
    } else if (window.location.pathname === '/Users') {
      setUs({ backgroundColor: '#e1e1e1', borderRight: '3px solid #ef8236', fontWeight: 'bold', marginLeft: '23px' });
      setMs(undefined);
      setQs(undefined);
      setTs({ marginLeft: '19px' });
    }
    else {
      setMs({ backgroundColor: '#e1e1e1', borderRight: '3px solid #ef8236', fontWeight: 'bold' });
      setQs(undefined);
      setTs({ marginLeft: '19px' });
      setUs({ marginLeft: '23px' });
    }
  }, [window.location.pathname]); // Add `window.location.pathname` to the dependency array

  return (
    <div className="container1">
      <NavLink to="/" className="nav-item1 item1" style={ms}>
        Home
      </NavLink>
      <div>Public</div>
      <div className="item-c">
        <NavLink to="/Questions" className="nav-item1 item2" style={qs}>
          <img src={globe} alt="globe" />
          <div>Question</div>
        </NavLink>
        <NavLink to="/Tags" className="nav-item1 item2" style={ts}>
          Tags
        </NavLink>
        <NavLink to="/Users" className="nav-item1 item2" style={us}>
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSideBar;
