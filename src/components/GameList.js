import React from 'react'
import GameCard from './GameCard';

function GameList({games, onHandleDelete, onUpdatePatch, onDecrementPatch}) {
  
  
    const newGame = games.map(game => {
        return <GameCard onDecrementPatch={onDecrementPatch} onUpdatePatch={onUpdatePatch} game={game} key={game.id} onHandleDelete={onHandleDelete}/>
    })

  
  
    return (
            <ul className="cards">
            {newGame}
            </ul>
    );
  }
  
  export default GameList;