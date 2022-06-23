import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCard from "./GameCard";

const GameDetail = () => {
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

   return (
      <GameCard game={game} />
   );
};

export default GameDetail;
