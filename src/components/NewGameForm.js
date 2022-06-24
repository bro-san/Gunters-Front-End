import React, { useState } from "react";
import TextField from '@mui/material/TextField';
// import { Button } from "@mui/material";

function NewGameForm({ onAddGame }) {
   const [name, setName] = useState("");
   const [image, setImage] = useState("");
   const [likes, setLikes] = useState("");
   const [description, setDescription] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
      fetch("https://gentle-coast-35647.herokuapp.com/games", {
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

         <form onSubmit={handleSubmit} className="form">
            <h2 className="input-name">New Game:</h2>
            <label className="input-name">Title:</label>
            <TextField
               className="form-input"
               type="text"
               label="Game name"

               name='name'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <label className="input-name">Image:</label>
            <TextField
               className="form-input"
               type="text"
               label="URL"
               name='image'
               placeholder='Image URL'
               value={image}
               onChange={(e) => setImage(e.target.value)}
            />
            <label className="input-name">Likes:</label>
            <TextField
               className="form-input"
               type="text"
               label="Likes"
               name='likes'
               step='1'
               placeholder='Likes'
               value={likes}
               onChange={(e) => setLikes(parseFloat(e.target.value))}
            />
            <label className="input-name">Description:</label>
            <TextField
               className="form-input"
               type="text"
               label="Description"
               name='description'
               placeholder='Game description'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <button className="submit-button" variant="contained">Submit</button>
         </form>
      </div>
   );
}

export default NewGameForm;
