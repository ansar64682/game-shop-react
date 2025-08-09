import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "../assets/css/AppLayout.module.css";
import Home from "./Home";
import GameDetail from "./GameDetail";

function MainPage({ isDarkMode, filteredGames, setFilter, setSortOrder }) {
  return (
    <div className={`${styles.main} ${isDarkMode ? styles.dark : ""}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filteredGames={filteredGames}
              isDarkMode={isDarkMode}
              setFilter={setFilter}
              setSortOrder={setSortOrder}
            />
          }
        />
        <Route
          path="/game/:id"
          element={<GameDetail games={filteredGames} isDarkMode={isDarkMode} />}
        />
      </Routes>
    </div>
  );
}

export default MainPage;
