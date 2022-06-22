// import React, {useState, useEffect} from 'react'
// import GameList from './GameList'
// import GameSearch from './GameSearch'
// import NewGameForm from './NewGameForm'

// function GameContainer() {

  // const [games, setGames] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:3000/games')
  //   .then(resp => resp.json())
  //   .then(data => setGames(data))
  // }, [])

  //console.log(games)

  // const onAddGame = (newGame) => {
  //   const newGamesArray = [...games, newGame]
  //   setGames(newGamesArray)
  // }

  // const [searchText, setSearchText] = useState("")
  // function handleSearchChanges(e){
  //   setSearchText(e.target.value)
  // }

  // const displayGames = games.filter((game) => {
  //   return (game.name.toLowerCase().includes(searchText.toLowerCase()))
  // })  

  //   return (
  //     <>

  //     <NewGameForm onAddGame={onAddGame}/>
  //     <GameSearch handleSearchChanges={handleSearchChanges}/>
  //     <GameList games={displayGames}/>
  //     </>
  //   );
  // }
  
  // export default GameContainer;
