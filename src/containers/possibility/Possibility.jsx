import React from 'react';
import "./possibility.scss";
import imagePossibility from "../../assets/imagePossibility.png";

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={imagePossibility} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h3>Request Early Access to Get Started</h3>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility