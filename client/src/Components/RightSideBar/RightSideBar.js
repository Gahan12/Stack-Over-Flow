import React from 'react';
import './RightSideBar.css';
import pen from '../images/pen.jpg';
import comment from '../images/comment.webp';
import stack from '../images/stack.png';

const RightSideBar = () => {
  return (
    <div className='container3'>
      <div className='container31'>
        <div className='t1'>The OverFlow Blog</div>
        <div className='p1'>
          <div className='d1'>
            <img src={pen} />
            <div>Observability is key to the future of software (and your DevOps career)</div>
          </div>
          <div className='d1'>
            <img src={pen} />
            <div>Podcast 374: How valuable is your screen name?</div>
          </div>
        </div>
      </div>
      <div className='container31'>
        <div className='t1'>Featured on Meta</div>
        <div className='p1'>
          <div className='d1'>
            <img src={comment} />
            <div>Review queue workflows - Final release....</div>
          </div>
          <div className='d1'>
            <img src={comment} />
            <div>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</div>
          </div>
          <div className='d1'>
            <img src={stack} />
            <div>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</div>
          </div>
        </div>
      </div>
      <div className='container31'>
        <div className='t1'>Hot Meta Posts</div>
        <div className='p1'>
          <div className='d1'>
            <div style={{marginRight:'1vw'}}>38</div>
            <div>Why was this spam flag declined, yet the question marked as spam?</div>
          </div>
          <div className='d1'>
            <div style={{ marginRight: '1vw' }}>20</div>
            <div>What is the best course of action when a user has high enough rep to...</div>
          </div>
          <div className='d1'>
            <div style={{ marginRight: '1vw' }}>14</div>
            <div>Is a link to the "How to ask" help page a useful comment?</div>
          </div>
        </div>
      </div>
      <div className='container32'>
        <div className='t2'>Watched Tags</div>
        <div className='p2'>
          <p>c</p>
          <p>css</p>
          <p>express</p>
          <p>firebase</p>
          <p>html</p>
          <p>java</p>
          <p>javascript</p>
          <p>mern</p>
          <p>mongodb</p>
          <p>mysql</p>
          <p>next.js</p>
          <p>node.js</p>
          <p>php</p>
          <p>python</p>
          <p>reactjs</p>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar;