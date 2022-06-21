import React from 'react'
import GameCard from './GameCard';

function GameList({games}) {



    return (
        <section>
            <ul>
            {games.map(game => {
                return <GameCard game={game} key={game.id}/>
            })}
            </ul>
        </section>
   
     
    );
  }
  
  export default GameList;