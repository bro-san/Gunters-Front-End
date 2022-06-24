import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Games from "./Games"
import NewGameForm from "./NewGameForm"
import GameDetail from "./GameDetail";


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

        <Route path="/games">
        <Games games={games} onHandleDelete={handleDelete} onUpdatePatch={updatePatch} onDecrementPatch={decrementPatch}/>
        </Route>

        <Route path="/add">
          <NewGameForm onAddGame={onAddGame}/>
        </Route>

        <Route path="/:id/GameDetail">
          <GameDetail onAddEgg={onAddEgg}/>
        </Route>

        <Route exact path="/">
          <Home game={homeGame} onHandleDelete={handleDelete} onUpdatePatch={updatePatch} onDecrementPatch={decrementPatch}/>
        </Route>
       
         <Route exact path="*">
          <h1>NOT FOUND!</h1>
        </Route> 
        
      </Switch>

    

    <p>Unfamiliar with the title of this site? Here's your first <a href="https://readyplayerone.fandom.com/wiki/Gunter">easter egg hunt</a>.</p>
    </div>
  );
}

export default App;
