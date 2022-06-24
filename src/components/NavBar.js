import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
    <div>
       <nav className="nav-bar">
      <h1 className="nav-title">Gunters</h1>
      <NavLink exact to="/" className='link'>
        Home
      </NavLink>
      <NavLink exact to="/games" className='link'>
        Games
      </NavLink>
      <NavLink exact to="/add" className='link'>
        New Game
      </NavLink> 
    </nav>
    </div>
     
  );
}

export default NavBar;