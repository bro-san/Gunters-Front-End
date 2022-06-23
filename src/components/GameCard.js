import React, {useEffect} from 'react'
import {Link} from "react-router-dom"

function GameCard( {game, onHandleDelete, onUpdatePatch, onDecrementPatch} ) {

    const {name, image, description, likes, id } = game
    
    function addLikes(e){
        console.log(e.target.textContent)
      
            const updateObj = {
            likes : likes + 1
        }
             fetch(`http://localhost:3000/games/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
             },
             body: JSON.stringify(updateObj)
        })
        .then(res => res.json())
        .then(data => onUpdatePatch(data))
        }

        function subtractLikes(e){
            console.log(e.target)
            const updateObj = {
                likes : likes - 1
            }
    
                  fetch(`http://localhost:3000/games/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                 },
                 body: JSON.stringify(updateObj)
            })
            .then(res => res.json())
            .then(data => onDecrementPatch(data))
            }
    
  

    function handleClick(){
        fetch(`http://localhost:3000/games/${id}`, {
            method:"DELETE"
        })
        onHandleDelete(id)
    }

    return (
        <li className='card'>
            <div>
                <h4>{name}</h4>
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>Description:</h3>
                <p>{description}</p>
                <button onClick={addLikes}>Likes</button>
                <button onClick={subtractLikes}>Dislike</button>
                <p>{likes}</p>
                <Link to={`/${id}/GameDetail`} onClick={console.log("go to details game")}>Details</Link>
                <button onClick={handleClick}>Delete</button>
            </div>
        </li>
    );
}

export default GameCard;