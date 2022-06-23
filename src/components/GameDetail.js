import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GameDetail = ({onHandleDelete, onUpdatePatch, onDecrementPatch}) => {
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
   <>
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
         <button onClick={handleClick}>Delete</button>
      </div>
   </>
   );
};

export default GameDetail;
