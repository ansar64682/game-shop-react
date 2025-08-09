import React from "react";
import GameCard from "./GameCard";

const Game = ({ games, isDarkMode, onGameClick }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isDarkMode={isDarkMode}
          onClick={() => onGameClick(game)}
        />
      ))}
    </div>
  );
};

export default Game;
