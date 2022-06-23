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

function GameCard({ game, onHandleDelete, onUpdatePatch, onDecrementPatch }) {

    const { name, image, description, likes, id } = game
   
    function addLikes(e) {
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
        <Card sx={{ maxWidth: 345 }}>
            <div className="cards">
                <li className='card'>

                <CardHeader title={name}></CardHeader>
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    maxheight={100}
                />
                <h3>Description:</h3>
                <CardContent>
                   
                    <Typography variant='body2' color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton variant="contained" color='success' onClick={addLikes}><ThumbUpIcon /></IconButton>
                    <IconButton variant="contained" color='error' onClick={subtractLikes}><ThumbDownIcon /></IconButton>
                    <p>{likes}</p>
                </CardActions>
                <IconButton aria-label="delete" size="large" onClick={handleClick}><DeleteIcon fontSize='inherit' /></IconButton>
            </li>
            </div>
            
        </Card>



    );
}

export default GameCard;