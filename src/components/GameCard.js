import React from "react";
import { Link } from "react-router-dom";

function GameCard({ game }) {
   const { name, image, description, likes, id } = game;
   return (
      <li className='card'>
         <div>
            <h4>{name}</h4>
            <img src={image} alt={name} />
         </div>
         <div>
            <p>{description}</p>
            <Link to={`/games/${id}/details`} className='button'>
               Details: {id}
            </Link>
            <br></br>
            <br></br>
            <button>Likes: {likes}</button>
         </div>
      </li>
   );
}

export default GameCard;
