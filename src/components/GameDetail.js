import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GameDetail = ({onAddEgg}) => {
   const [game, setGame] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [eggText, setEggText] = useState("");

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

   const { name, image, description, easterEggs } = game;

   function handleSubmit(e) {
      e.preventDefault();
      const newEggs = [...easterEggs, eggText]
      fetch(`http://localhost:3000/games/${id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            easterEggs: newEggs,
         }),
      })
         .then((r) => r.json())
         .then((updatedGame) => onAddEgg(updatedGame))
         .then(() => {
            setEggText("")
         })
      }

      const eggDisplay = easterEggs.map(egg => {
         return(<li>{egg}</li>)
      })

   return (
   <>
      <div>
         <h4>{name}</h4>
         <img src={image} alt={name} />
      </div>
      <div>
         <h3>Description:</h3>
         <p>{description}</p>
         <h2>Easter Eggs Found:</h2>
         <ul>
            {eggDisplay}
         </ul>
         <h2>Submit a New Easter Egg!</h2>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               name='easterEgg'
               placeholder='Add an egg!'
               value={eggText}
               onChange={(e) => setEggText(e.target.value)}
            />
            <button type='submit'>Add Egg</button>
         </form>

      </div>
   </>
   );
};

export default GameDetail;
