import React from "react"
import GameCard from "./GameCard"


function Home({game,  onHandleDelete, onUpdatePatch, onDecrementPatch}) {
    console.log("this:", game)
    return(
        <div  >
      <button id="hidden-button">Hidden</button>
        <div className="last-game">
             <h1 className="latest-game">Check Out The Community's Latest Game:</h1>
            <GameCard  game={game}  onHandleDelete={onHandleDelete} onUpdatePatch={onUpdatePatch} onDecrementPatch={onDecrementPatch}/>
        </div>
       
        
        </div>
    )
}

export default Home