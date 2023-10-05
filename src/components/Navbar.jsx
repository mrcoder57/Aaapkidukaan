import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from './NavLinks.js';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked)
    console.log(isClicked);
  };
  return (
    <nav className='fixed 
    top-0 z-20'>
    <div className="navbar bg-base-100 fixed
      top-0 z-20">
  <div className="flex-1">
  
    <Link 
to="/"

onClick={()=>{
  setActive("");
  window.scrollTo(0,0);
}}  className="btn btn-ghost normal-case text-xl">AapkiDukaan.com</Link>
  </div>
  
  <div className="flex-none">
    <button className="btn btn-square btn-ghost mb-3" onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
   
    <div className={`${ !isClicked ? 'flex':'hidden'} ${isClicked ? 'dropdown dropdown-top mt-2' : ''}`}>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href='#products'>Products</a></li>
    <li><a href='#Hero'>About</a></li>
    <li><a href='#Contact'>Contact</a></li>
  </ul>
</div>
</button>
  </div>
  
</div>
</nav>
  )
}

export default Navbar