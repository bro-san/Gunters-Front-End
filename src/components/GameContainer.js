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

  const [searchText, setSearchText] = useState("")
  function handleSearchChange(e){
    setSearchText(e.target.value)
  }
    return (
      <>
      <NewGameForm />
      <GameList />
      <GameSearch handleSearchChanges={handleSearchChange}/>
      </>
    );
  }
  
  export default GameContainer;