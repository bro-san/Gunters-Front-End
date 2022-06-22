import React, { useState, useEffect } from 'react'
import GameList from './GameList'
import GameSearch from './GameSearch'

function Games({games}) {
    // const [games, setGames] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/games')
    //         .then(resp => resp.json())
    //         .then(data => setGames(data))
    // }, [])

    const [searchText, setSearchText] = useState("")
    function handleSearchChanges(e) {
        setSearchText(e.target.value)
    }

    const displayGames = games.filter((game) => {
        return (game.name.toLowerCase().includes(searchText.toLowerCase()))
    })


    return (
        <div>
            <GameSearch handleSearchChanges={handleSearchChanges} />
            <GameList games={displayGames} />
        </div>

    )
}

export default Games