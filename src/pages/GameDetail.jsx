import React from "react";
import { useParams } from "react-router-dom";
import styles from "../assets/css/GameDetail.module.css";

const GameDetail = ({ games, isDarkMode }) => {
  const { id } = useParams();
  const game = games.find((g) => g.id.toString() === id);
  const { day, month, year } = game.date;

  if (!game) return <p>No game selected.</p>;

  return (
    <div className={`${styles.gameDetail} ${isDarkMode ? styles.dark : ""}`}>
      <h1>{game.title}</h1>
      <img src={game.cover} alt={game.title} />
      <p>{game.description}</p>
      <ul>
        <li>
          <strong>Genre:</strong> {game.genre}
        </li>
        <li>
          <strong>Platform:</strong> {game.platform.join(", ")}
        </li>
        <li>
          <strong>Release Date:</strong> {day} {month} {year}
        </li>
        <li>
          <strong>Rating:</strong> {game.rating}
        </li>
      </ul>
    </div>
  );
};

export default GameDetail;
