import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

  return (

    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/games" >
        Games
      </NavLink>
      <NavLink exact to="/add" >
        New Game
      </NavLink> 
    </nav>



  );
}

export default NavBar;