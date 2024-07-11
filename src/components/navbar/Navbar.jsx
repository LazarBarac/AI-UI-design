import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.scss";
import logo from "../../assets/GPT-3.png";



const Menu = () => {
  return(
    <>
      <p className='hover'><a href="#home">Home</a></p>
      <p className='hover'><a href="#wgpt3">What is GPT-3?</a></p>
      <p className='hover'><a href="#possibility">Open AI</a></p>
      <p className='hover'><a href="#features">Case Studies</a></p>
      <p className='hover'><a href="#blog">Library</a></p>
    </>
  )
}

const Navbar = () => {

  const [toogleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toogleMenu ? <RiCloseLine color = "#fff" size = {27} onClick = {() => setToggleMenu(false)}/> : <RiMenu3Line color = "#fff" size = {27} onClick = {() => setToggleMenu(true)}/>}
        {toogleMenu &&  /*Ovo znaci da naredni kod treba da se izvrsi ako i samo ako je toggleMenu true*/ (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
              <div className='gpt3__navbar-manu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
