import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

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
            easterEggs: [],
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
         <form onSubmit={handleSubmit} className="form">
            <label>Title:</label>
            <TextField
           
            type="text"
            label="Title"
             
               name='name'
               placeholder='Game name'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <label>Image:</label>
            <TextField
               type='text'
               name='image'
               placeholder='Image URL'
               value={image}
               onChange={(e) => setImage(e.target.value)}
            />
            <label>Likes:</label>
            <TextField
               type='number'
               name='likes'
               step='1'
               placeholder='Likes'
               value={likes}
               onChange={(e) => setLikes(parseFloat(e.target.value))}
            />
            <label>Description:</label>
            <TextField
               type='text'
               name='description'
               placeholder='Game description'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <button id="submit-button" variant="contained">Submit</button>
         </form>
      </div>
   );
}

export default NewGameForm;
