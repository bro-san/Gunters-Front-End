import React from 'react'

function GameCard({game}) {

    const {name, image, description, likes } = game
    return (
        <li className='card'>
            
            <div>
                <h4>{name}</h4>
                <img src={image} alt={name} />
            </div>
            <div>
                <p>{description}</p>
                <button>Likes: {likes}</button>
            </div>
        </li>

    );
}

export default GameCard;