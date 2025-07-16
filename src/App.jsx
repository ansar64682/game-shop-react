/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";
import styles from "./assets/css/AppLayout.module.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainPage from "./pages/MainPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const [games, setGames] = useState([
    {
      id: 1,
      genre: "Action",
      rating: 9.5,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "Assassin's Creed II",
      platform: ["Windows", "PlayStation"],
      cover: "/img/assasins_creen_cover.jpeg",
    },
    {
      id: 2,
      genre: "Action",
      rating: 9.5,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "Call of Duty: Modern Warfare III",
      platform: ["Windows", "PlayStation"],
      cover:
        "/img/Call-of-Duty-Modern-Warfare-III-Pre-Installed-Game-Download.webp",
    },
    {
      id: 3,
      genre: "Action",
      rating: 9.4,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "Call of Duty: Modern Warfare",
      platform: ["Windows", "PlayStation"],
      cover:
        "/img/Call-of-Duty-Modern-Warfare-Pre-installed-Game-Download.webp",
    },
    {
      id: 4,
      genre: "Open World",
      rating: 9.6,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "Dune: Awakening",
      platform: ["Windows", "PlayStation"],
      cover: "/img/Dune-Awakening-Pre-Installed-Game-Download.webp",
    },
    {
      id: 5,
      genre: "Action",
      rating: 9.4,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "Far Cry 3",
      platform: ["Windows", "Xbox", "PlayStation"],
      cover: "/img/farcry3.jpeg",
    },
    {
      id: 6,
      genre: "Open World",
      rating: 9.9,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "Red Dead Redemption II",
      platform: ["Windows", "Xbox", "Playstation"],
      cover: "/img/rdd2.jpeg",
    },
    {
      id: 7,
      genre: "Survival",
      rating: 9.3,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "SCUM",
      platform: ["Windows"],
      cover: "/img/SCUM-Free-Download-Crack-Repack-Games.jpg",
    },
    {
      id: 8,
      genre: "Simulation",
      rating: 9.6,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "The Sims 4",
      platform: ["Windows"],
      cover: "/img/The-Sims-4-Repack-Games.webp",
    },
    {
      id: 9,
      genre: "Adventure",
      rating: 9.7,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "Tomb Raider",
      platform: ["Windows"],
      cover: "/img/tombraider.jpeg",
    },
    {
      id: 10,
      genre: "Shooter",
      rating: 9.4,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "The Division",
      platform: ["Windows"],
      cover: "/img/Tom-Clancys-The-Division-Pre-Installed-Game-Download.webp",
    },
    {
      id: 11,
      genre: "Open World",
      rating: 9.8,
      date: { day: 1, month: "Jan", year: 2024 },
      title: "GTA: Vice City",
      platform: ["Windows"],
      cover: "/img/vicecity.jpg",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  const getFilteredGames = () => {
    let result = [...games];

    // 👉 Apply platform filter
    if (filter !== "all") {
      result = result.filter((g) =>
        g.platform.map((p) => p.toLowerCase()).includes(filter.toLowerCase())
      );
    }

    // 👉 Apply genre filter
    if (genreFilter !== "all") {
      result = result.filter(
        (g) => g.genre.toLowerCase() === genreFilter.toLowerCase()
      );
    }

    // 👉 Apply sort (optional if you're sorting too)
    switch (sortOrder) {
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  };

  const filteredGames = getFilteredGames();

  return (
    <div className={` d-grid ${styles.app}`}>
      <Header
        title="GamesFlix"
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <SideBar setGenreFilter={setGenreFilter} />
      <MainPage
        game={games}
        isDarkMode={isDarkMode}
        setFilter={setFilter}
        setSortOrder={setSortOrder}
        filteredGames={filteredGames}
      />
    </div>
  );
}

export default App;
