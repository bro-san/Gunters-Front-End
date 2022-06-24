import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import EggIcon from '@mui/icons-material/Egg';
import {Link} from "react-router-dom"
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function GameCard({ game, onHandleDelete, onUpdatePatch, onDecrementPatch }) {

    const [toggleBackground, setToggleBackground ] = useState(true)

    const {name, image, likes, id } = game
    
    function addLikes(e){
        console.log(e.target.textContent)

        const updateObj = {
            likes: likes + 1
        }
        fetch(`https://gentle-coast-35647.herokuapp.com/games/${id}`, {
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

    function subtractLikes(e) {
        console.log(e.target)
        const updateObj = {
            likes: likes - 1
        }

        fetch(`https://gentle-coast-35647.herokuapp.com/games/${id}`, {
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



    function handleClick() {
        fetch(`https://gentle-coast-35647.herokuapp.com/games/${id}`, {
            method: "DELETE"
        })
        onHandleDelete(id)
       
    }
    console.log(toggleBackground)
    return (
       <>
        <div className='card'>
            <Card  className={toggleBackground ? 'fix-card' : "fix-card-background"} >
            
                <li >

                <CardHeader title={name} action={
                
                     <FormControlLabel onClick={() => setToggleBackground(!toggleBackground)} control={<Switch defaultChecked />} /> }
                    >
                    
                </CardHeader>
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    maxheight={100}
                />
               {/* <CardContent>
               </CardContent> */}
               
                <div className='div-wrapper'>
                    <IconButton id='like' variant="contained" color='success' onClick={addLikes}><ThumbUpIcon /></IconButton>
                    <IconButton id='dislike' variant="contained" color='error' onClick={subtractLikes}><ThumbDownIcon /></IconButton>
                    
                
                <p className='likes-counter'>{likes}</p>
                </div>
                     <Link className='egg-button' to={`/${id}/GameDetail`}><EggIcon /></Link>
                <IconButton className='delete-button' aria-label="delete" size="large" onClick={handleClick}><DeleteIcon fontSize='inherit' /></IconButton>
            </li>  
        </Card>
        </div>
      

        {/* <li className='card'>
            <div>
                <h4>{name}</h4>
                <img src={image} alt={name} />
            </div>
            <div>
                <button onClick={addLikes}>Like</button>
                <button onClick={subtractLikes}>Dislike</button>
                <p>{likes}</p>
                <Link to={`/${id}/GameDetail`}>Details</Link>
                <button onClick={handleClick}>Delete</button>
            </div>
        </li> */}
       </>
    );
}

export default GameCard;