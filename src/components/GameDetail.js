import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const GameDetail = ({onAddEgg}) => {
   const [game, setGame] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [eggText, setEggText] = useState("");
   const [eggs, setEggs] = useState ([])

   const { id } = useParams();

   useEffect(() => {
      fetch(`https://gentle-coast-35647.herokuapp.com/games/${id}`)
         .then((r) => r.json())
         .then((game) => {
            setGame(game);
            setIsLoaded(true);
            setEggs(game.easterEggs)
         });
   }, [id]);

   if (!isLoaded) return <h2>Loading...</h2>;

   const { name, image, description, easterEggs } = game;

   function handleSubmit(e) {
      e.preventDefault();
      const newEggs = [...easterEggs, eggText]
      fetch(`https://gentle-coast-35647.herokuapp.com/games/${id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            easterEggs: newEggs,
         }),
      })
         .then((r) => r.json())
         .then((updatedGame) => {onAddEgg(updatedGame)
            setEggs(updatedGame.easterEggs)
         })
         .then(() => {
            setEggText("")
            
         })
      }

      const eggDisplay = eggs.map(egg => {
         return(<li key={egg}>{egg}</li>)
      })

   return (
   <>
   <Card id="card-details"sx={{ maxWidth: 600 }}>
       <div>
       <CardHeader
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
      </div>
      <div>
      <CardContent>
      <h3>Description:</h3>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
         
      <CardContent> 
         <h2>Easter Eggs Found:</h2>
         <ul>
            {eggDisplay}
         </ul>
         <h2>Submit a New Easter Egg!</h2>
         <form className="form-class" onSubmit={handleSubmit}>
         <TextField
            type="text"
            label="Add an egg!"
               name='easterEgg'
               value={eggText}
               onChange={(e) => setEggText(e.target.value)}
            />
            <button className="search-button" type='submit'>Add Egg</button>
         </form>
      </CardContent>
         

      </div>
   </Card>
     
         
   </>
   );
};

export default GameDetail;
