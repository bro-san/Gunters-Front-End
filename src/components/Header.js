import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {

  return (
      <div>
        <h1>Gunters</h1>
        <h2>The Video-Game Oddities Community</h2>
        <nav>
          <NavLink  to="/" exact >Home</NavLink>
          <NavLink  to="/games" exact>Games</NavLink>
          <NavLink  to="/add_new_game" exact>New Game</NavLink>
        </nav>
      </div>
  );
}

export default Header;