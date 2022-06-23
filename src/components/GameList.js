import React from 'react'
import GameCard from './GameCard';

function GameList({games, onHandleDelete, onUpdatePatch, onDecrementPatch}) {



    return (
     
            <ul>
            {games.map(game => {
                return <GameCard onDecrementPatch={onDecrementPatch} onUpdatePatch={onUpdatePatch} game={game} key={game.id} onHandleDelete={onHandleDelete}/>
            })}
            </ul>
    );
  }
  
  export default GameList;