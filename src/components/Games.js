import React, { useState } from 'react'
import GameList from './GameList'
import GameSearch from './GameSearch'

function Games( {games, onHandleDelete, onUpdatePatch, onDecrementPatch, } ) {
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
            <GameList onDecrementPatch={onDecrementPatch} games={displayGames} onHandleDelete={onHandleDelete} onUpdatePatch={onUpdatePatch}/>
        </div>

    )
}

export default Games