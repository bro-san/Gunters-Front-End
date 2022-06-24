import React, { useEffect } from 'react';
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
import {Link} from "react-router-dom"

function GameCard({ game, onHandleDelete, onUpdatePatch, onDecrementPatch }) {

    const {name, image, likes, id } = game
    
    function addLikes(e){
        console.log(e.target.textContent)

        const updateObj = {
            likes: likes + 1
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

    function subtractLikes(e) {
        console.log(e.target)
        const updateObj = {
            likes: likes - 1
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



    function handleClick() {
        fetch(`http://localhost:3000/games/${id}`, {
            method: "DELETE"
        })
        onHandleDelete(id)
    }

    return (
       <>
        <div className='card'>
            <Card  id='fix-card' >
            
                <li >

                <CardHeader title={name}></CardHeader>
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    maxheight={100}
                />
               {/* <CardContent>
               </CardContent> */}
                <Link to={`/${id}/GameDetail`}>Details</Link>
                <div className='div-wrapper'>
                    <IconButton id='like' variant="contained" color='success' onClick={addLikes}><ThumbUpIcon /></IconButton>
                    <IconButton id='dislike' variant="contained" color='error' onClick={subtractLikes}><ThumbDownIcon /></IconButton>
                    
                
                <p className='likes-counter'>{likes}</p>
                </div>
                    
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