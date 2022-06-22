import React, {useState, useEffect} from 'react'
import GameList from './GameList'
import GameSearch from './GameSearch'
import NewGameForm from './NewGameForm'

function GameContainer() {

  const [games, setGames] = useState([])
const [searchText, setSearchText] = useState("")
  useEffect(() => {
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(data => setGames(data))
  }, [])

  console.log(games)

 
  function handleSearchChanges(e){
    setSearchText(e.target.value)
  }
    return (
      <>
      <NewGameForm />
      <GameSearch handleSearchChanges={handleSearchChanges}/>
      <GameList games={games}/>
      </>
    );
  }
  
  export default GameContainer;