import React from 'react';
import "./feature.scss";

const Feature = ({title, text, className}) => {
  return (
    <div className={className}>
      <div className='gpt3__features-container__feature-title'>
        <div/>
        <h2>{title}</h2>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
