import React from 'react'
import GameList from './GameList'
import GameSearch from './GameSearch'
import NewGameForm from './NewGameForm'

function GameContainer() {
    return (
      <>
      <NewGameForm />
      <GameList />
      <GameSearch />
      </>
    );
  }
  
  export default GameContainer;