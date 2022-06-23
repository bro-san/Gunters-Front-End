import React, { useState } from "react";
import TextField from "@mui/material/TextField";

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
            setName("");
            setImage("");
            setLikes("");
            setDescription("");
         });
   }

   return (
      <div className='new-game-form'>
         <h2>New Game</h2>
         onSubmit={handleSubmit}>
         <TextField
            required
            id='outlined-required'
            label='Game Name'
            type='search'
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <TextField
            required
            id='outlined-helperText'
            label='Image'
            defaultValue='Default Value'
            helperText='Enter URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
         />
         <TextField
            id='outlined-number'
            label='Likes'
            type='number'
            InputLabelProps={{
               shrink: true,
            }}
            value={likes}
            onChange={(e) => setLikes(parseFloat(e.target.value))}
         />
         <TextField
            required
            id='outlined-search'
            label='Game Description'
            type='search'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <button type='submit'>Add Game</button>
      </div>
   );
}

export default NewGameForm;
