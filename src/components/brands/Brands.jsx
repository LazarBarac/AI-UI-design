import React from 'react';
import "./brands.scss";
import {google, slack, atlassian, dropbox, shopify} from "./imports"

const Brands = () => {
  return (
    <div className='gpt3__brands section__padding'>
      <a href='https://www.google.com/' target='blank'><img src= {google} alt="google" /></a>
      <a href="https://slack.com/" target='blank'><img src= {slack} alt="slack" /></a>
      <a href="https://www.atlassian.com/" target='blank'><img src= {atlassian} alt="atlassian" /></a>
      <a href="https://www.dropbox.com/" target='blank'><img src= {dropbox} alt="dropbox" /></a>
      <a href="https://www.shopify.com/" target='blank'><img src= {shopify} alt="shopify" /></a>   
    </div>
  )
}

export default Brands
