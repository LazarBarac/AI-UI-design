import React from 'react';
import "./whatsGPT3.scss";
import { Feature } from '../../components';

const WhatsGPT3 = () => {
  return (
    <div className='gpt3__whatsgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatsgpt3-feature'>
          <Feature className="gpt3__features-container__feature row" title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. "/>        
      </div>
      <div className='gpt3__whatsgpt3-heading'>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatsgpt3-container'>
        <Feature className="gpt3__features-container__feature" title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Feature className="gpt3__features-container__feature" title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature className="gpt3__features-container__feature" title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default WhatsGPT3