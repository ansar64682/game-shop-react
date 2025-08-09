// src/pages/Home.jsx
import React from "react";
import Game from "../components/Game";
import styles from "../assets/css/AppLayout.module.css";
import { useNavigate } from "react-router-dom";

export default function Home({
  isDarkMode,
  filteredGames,
  setFilter,
  setSortOrder,
}) {
  const navigate = useNavigate();

  const handleGameClick = (game) => {
    navigate(`/game/${game.id}`);
  };
  return (
    <div className={`${styles.main} ${isDarkMode ? styles.dark : ""}`}>
      <div
        className={`${styles.topRibbon} ${isDarkMode ? styles.ribbonDark : ""}`}
      >
        <div className="p-4">
          <h1>Games</h1>
        </div>

        <div className="d-flex gap-2 px-4 pb-4">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Platform
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("windows")}
                >
                  Windows
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("playstation")}
                >
                  PlayStation
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("xbox")}
                >
                  Xbox
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("all")}
                >
                  All Platforms
                </button>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setSortOrder("a-z")}
                >
                  A to Z
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setSortOrder("z-a")}
                >
                  Z to A
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.contentArea}>
        {/* Game grid */}
        <Game
          games={filteredGames}
          isDarkMode={isDarkMode}
          onGameClick={handleGameClick}
        />
      </div>
    </div>
  );
}
