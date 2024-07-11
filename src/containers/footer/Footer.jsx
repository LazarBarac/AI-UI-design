import React from 'react';
import "./footer.scss";
import gpt3Logo from "../../assets/GPT-3.png"

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h2 className='gradient__text'>Do you want to step in to the future before others</h2>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-content'>
        <div className='gpt3__footer-content_logo'>
          <h2>GPT-3</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb.</p>
        </div>
        <div className='gpt3__footer-content_links'>
          <div className='gpt3__footer-content_links-row'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
          </div>
          <div className='gpt3__footer-content_links-row'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-content_links-row'>
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer