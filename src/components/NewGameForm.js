import React, { useState } from "react";

function NewGameForm({ onAddGame }) {
   const [name, setName] = useState("");
   const [image, setImage] = useState("");
   const [likes, setLikes] = useState("");
   const [description, setDescription] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3000/games", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: name,
            image: image,
            likes: likes,
            description: description,
         }),
      })
         .then((r) => r.json())
         .then((newGame) => onAddGame(newGame))
         .then(() => {
            setName("")
            setImage("")
            setLikes("")
            setDescription("")
         })
         

   }

   return (
      <div className='new-game-form'>
         <h2>New Game</h2>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               name='name'
               placeholder='Game name'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <input
               type='text'
               name='image'
               placeholder='Image URL'
               value={image}
               onChange={(e) => setImage(e.target.value)}
            />
            <input
               type='number'
               name='likes'
               step='1'
               placeholder='Likes'
               value={likes}
               onChange={(e) => setLikes(parseFloat(e.target.value))}
            />
            <input
               type='text'
               name='description'
               placeholder='Game description'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <button type='submit'>Add Game</button>
         </form>
      </div>
   );
}

export default NewGameForm;
