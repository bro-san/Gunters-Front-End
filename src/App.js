import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Games from "./components/Games"
import NewGameForm from "./components/NewGameForm"
import GameDetail from "./components/GameDetail";


function App() {
  const [games, setGames] = useState([])
    
  useEffect(() => {
      fetch('https://gentle-coast-35647.herokuapp.com/games')
          .then(resp => resp.json())
          .then(data => setGames(data))
  }, [])
  
  const onAddGame = (newGame) => {
    const newGamesArray = [...games, newGame]
    setGames(newGamesArray)
  }
  
  const onAddEgg = (updatedGame) => {
    const updatedGames = games.map((ogGame) => {
      if (ogGame.id === updatedGame.id) {
        return updatedGame;
      } else {
        return ogGame;
      }
    });
    setGames(updatedGames);
  };

  function handleDelete(id) {
    const deleteCard = games.filter(game => game.id !== id)
    setGames(deleteCard)
  }
  
  function updatePatch(obj) {
    const patchRequest = games.map(game => game.id === obj.id ? obj : game);
    setGames(patchRequest)
  }
  
  function decrementPatch(obj) {
    const patchRequest = games.map(game => game.id === obj.id ? obj : game);
    setGames(patchRequest)
  }
  
  const homeGame = games[games.length-1]
  console.log("testing:", homeGame)

  return (
    <div className="background-wrapper">

      <NavBar />

      <Switch>

      <Route path="/home">
          <Home game={homeGame} onHandleDelete={handleDelete} onUpdatePatch={updatePatch} onDecrementPatch={decrementPatch}/>
        </Route>

        <Route exact path="/">
        <Games games={games} onHandleDelete={handleDelete} onUpdatePatch={updatePatch} onDecrementPatch={decrementPatch}/>
        </Route>

        <Route path="/add">
          <NewGameForm onAddGame={onAddGame}/>
        </Route>

        <Route path="/:id/GameDetail">
          <GameDetail onAddEgg={onAddEgg}/>
        </Route>
       
          <Route exact path="*">
          <h1>NOT FOUND!</h1>
        </Route>  
        
      </Switch>

    

    <footer>
    <p>Unfamiliar with the title of this site? Here's your first <a href="https://readyplayerone.fandom.com/wiki/Gunter">easter egg hunt</a>.</p>
    </footer>
    </div>
  );
}

export default App;
