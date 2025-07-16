import React from "react";
import PropTypes from "prop-types";
import styles from "../assets/css/gameCard.module.css";

function GameCard({ game, isDarkMode }) {
  const { title, genre, rating, date = {}, platform = [], cover } = game;
  const { day, month, year } = date;

  const platformIcons = {
    windows: "bi-windows",
    playstation: "bi-playstation",
    xbox: "bi-xbox",
    mac: "bi-apple",
  };

  return (
    <div
      className={`${styles.gameCardWrapper} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={styles.gameCard}>
        {/* 🎮 Cover */}
        <div className={styles.coverContainer}>
          <img src={cover} alt={title} className={styles.gameCover} />
          <div className={styles.genreBadge}>{genre}</div>
        </div>

        {/* 🏷 Ribbon */}
        <div
          className={`${styles.infoRibbon} ${
            isDarkMode ? styles.ribbonDark : ""
          }`}
        >
          <div className={`${styles.platforms}`}>
            {platform.map((p, i) => {
              const icon = platformIcons[p.toLowerCase()];
              return (
                <span key={i}>
                  {icon ? <i className={`bi ${icon}`}></i> : p}
                </span>
              );
            })}
          </div>
          <div className={styles.rating}>
            <i className="bi bi-star-fill text-warning"></i> {rating}
          </div>
        </div>

        {/* 📅 Lower Section */}
        <div
          className={`${styles.lowerSection}  ${
            isDarkMode ? styles.lowerSectionDark : ""
          }`}
        >
          <div className={styles.gameTitle}>{title}</div>
          <div className={styles.gameDate}>
            Released: {day} {month} {year}
          </div>
        </div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
  isDarkMode: PropTypes.bool,
};

export default GameCard;
