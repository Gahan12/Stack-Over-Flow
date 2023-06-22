import React from 'react';
import './Tags.css';

const TagList = ({tag}) => {
  return (
      <div className='tag'>
          <h5>{tag.tagTitle}</h5>
          <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagList;