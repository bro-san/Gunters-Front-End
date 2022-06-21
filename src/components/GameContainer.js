import React, {useState, useEffect} from 'react'
import GameList from './GameList'
import GameSearch from './GameSearch'
import NewGameForm from './NewGameForm'

function GameContainer() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(data => setGames(data))
  }, [])

  console.log(games)

    return (
      <>
      <NewGameForm />
      <GameList />
      <GameSearch />
      </>
    );
  }
  
  export default GameContainer;