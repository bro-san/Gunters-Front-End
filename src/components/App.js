import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Games from "./Games"
import NewGameForm from './NewGameForm'
import "../App.css"

function App() {
  const [games, setGames] = useState([])
    
  useEffect(() => {
      fetch('http://localhost:3000/games')
          .then(resp => resp.json())
          .then(data => setGames(data))
  }, [])
  const onAddGame = (newGame) => {
    const newGamesArray = [...games, newGame]
    setGames(newGamesArray)
  }
  return (
    <div>

      <NavBar />

      <Switch>

        <Route path="/games">
          <Games games={games}/>
        </Route>

        <Route path="/add">
          <NewGameForm />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

         <Route path="*">
          <h1>NOT FOUND!</h1>
        </Route> 
        
      </Switch>

    

    <p>Unfamiliar with the title of this site? Here's your first <a href="https://readyplayerone.fandom.com/wiki/Gunter">easter egg hunt</a>.</p>
    </div>
  );
}

export default App;
