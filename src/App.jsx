import { useState } from 'react'
import './App.scss'
import {Footer, Blog, Possibility, Features, Header, WhatsGPT3} from "./containers";
import {Cta, Brands, Navbar} from "./components";

function App() {
  return(
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brands/>
      <WhatsGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
