import React from "react"
import GameCard from "./GameCard"

function Home({game}) {
    console.log("this:", game)
    return(
        
        <div className="last-game">
             <h1>Check Out The Community's Latest Game:</h1>
            <GameCard game={game}/>
        </div>

    )
}

export default Home