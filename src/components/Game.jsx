import React from "react";
import GameCard from "./GameCard";

const Game = ({ games, isDarkMode }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard game={game} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
};

export default Game;
