import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
   const [game, setGame] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);

   const { id } = useParams();

   useEffect(() => {
      fetch(`http://localhost:3000/games/${id}`)
         .then((r) => r.json())
         .then((game) => {
            setGame(game);
            setIsLoaded(true);
         });
   }, [id]);

   if (!isLoaded) return <h2>Loading...</h2>;

   const { name, image, description, likes } = game;

   return (
      <section>
         <div className='project-detail box'>
            <div className='project-image'>
               <img src={image} alt={name} />
            </div>
            <div className='details'>
               <h2>{name}</h2>
               <p>{description}</p>
               <button>Likes: {likes}</button>
            </div>
         </div>
      </section>
   );
};

export default GameDetail;
