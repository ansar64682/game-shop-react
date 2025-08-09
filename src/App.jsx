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
      genre: "Simulator",
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

    {
      id: 12,
      genre: "RPG",
      rating: 10,
      date: { day: 25, month: "Feb", year: 2022 },
      title: "Elden Ring",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/elden_ring.jpg",
    },
    {
      id: 13,
      genre: "RPG",
      rating: 9.2,
      date: { day: 21, month: "Jun", year: 2024 },
      title: "Elden Ring: Shadow of the Erdtree",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/elden_ring_erdtree.jpg",
    },
    {
      id: 14,
      genre: "Action",
      rating: 9.0,
      date: { day: 10, month: "Dec", year: 2023 },
      title: "Cyberpunk 2077",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/cyberpunk2077.jpg",
    },
    {
      id: 15,
      genre: "Adventure",
      rating: 9.4,
      date: { day: 14, month: "Sep", year: 2024 },
      title: "Astro Bot",
      platform: ["PlayStation"],
      cover: "/img/astro_bot.jpg",
    },
    {
      id: 16,
      genre: "Adventure",
      rating: 9.3,
      date: { day: 11, month: "Oct", year: 2024 },
      title: "Metaphor: ReFantazio",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/metaphor_refantazio.jpg",
    },
    {
      id: 17,
      genre: "Simulator",
      rating: 9.1,
      date: { day: 10, month: "May", year: 2024 },
      title: "Satisfactory",
      platform: ["Windows"],
      cover: "/img/satisfactory.jpg",
    },
    {
      id: 18,
      genre: "Horror",
      rating: 9.0,
      date: { day: 8, month: "Feb", year: 2024 },
      title: "Silent Hill 2 Remake",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/silent_hill_2_remake.jpg",
    },
    {
      id: 19,
      genre: "Racing",
      rating: 9.2,
      date: { day: 26, month: "Jan", year: 2024 },
      title: "Tekken 8",
      platform: ["Windows", "PlayStation"],
      cover: "/img/tekken8.jpg",
    },
    {
      id: 20,
      genre: "Strategy",
      rating: 9.1,
      date: { day: 20, month: "Feb", year: 2024 },
      title: "Civilization VII",
      platform: ["Windows"],
      cover: "/img/civilization7.jpg",
    },
    {
      id: 21,
      genre: "Action",
      rating: 9.3,
      date: { day: 29, month: "Feb", year: 2024 },
      title: "Final Fantasy VII Rebirth",
      platform: ["PlayStation"],
      cover: "/img/ff7_rebirth.jpg",
    },
    {
      id: 22,
      genre: "Action",
      rating: 9.0,
      date: { day: 31, month: "Aug", year: 2024 },
      title: "Black Myth: Wukong",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/black_myth_wukong.jpg",
    },
    {
      id: 23,
      genre: "Action",
      rating: 9.8,
      date: { day: 22, month: "May", year: 2024 },
      title: "Dragon’s Dogma II",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/dragons_dogma_2.jpg",
    },
    {
      id: 24,
      genre: "Adventure",
      rating: 9.2,
      date: { day: 3, month: "Feb", year: 2025 },
      title: "Split Fiction",
      platform: ["Windows", "PlayStation"],
      cover: "/img/split_fiction.jpg",
    },
    {
      id: 25,
      genre: "Horror",
      rating: 9.0,
      date: { day: 26, month: "Oct", year: 2024 },
      title: "Alan Wake II",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/alan_wake_2.jpg",
    },
    {
      id: 26,
      genre: "Simulator",
      rating: 9.4,
      date: { day: 27, month: "Jun", year: 2024 },
      title: "Monster Hunter Wilds",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/monster_hunter_wilds.jpg",
    },
    {
      id: 27,
      genre: "Adventure",
      rating: 9.3,
      date: { day: 12, month: "Nov", year: 2024 },
      title: "Indiana Jones and the Great Circle",
      platform: ["Windows", "Xbox", "PlayStation"],
      cover: "/img/indiana_jones_great_circle.jpg",
    },
    {
      id: 28,
      genre: "RPG",
      rating: 9.5,
      date: { day: 15, month: "Jul", year: 2024 },
      title: "Balatro",
      platform: ["Windows"],
      cover: "/img/balatro.jpg",
    },
    {
      id: 29,
      genre: "RPG",
      rating: 9.7,
      date: { day: 17, month: "Mar", year: 2025 },
      title: "Ghost of Tsushima 2",
      platform: ["PlayStation"],
      cover: "/img/ghost_of_tsushima_2.jpg",
    },
    {
      id: 30,
      genre: "Strategy",
      rating: 9.2,
      date: { day: 10, month: "Apr", year: 2024 },
      title: "Frostpunk II",
      platform: ["Windows"],
      cover: "/img/frostpunk_2.jpg",
    },
    {
      id: 31,
      genre: "Metroidvania",
      rating: 9.6,
      date: { day: 25, month: "Dec", year: 2025 },
      title: "Hollow Knight: Silksong",
      platform: ["Windows", "Nintendo Switch", "PlayStation", "Xbox"],
      cover: "/img/silksong.jpg",
    },
    {
      id: 32,
      genre: "Action",
      rating: 9.1,
      date: { day: 8, month: "Aug", year: 2025 },
      title: "Mafia: The Old Country",
      platform: ["Windows", "PlayStation", "Xbox"],
      cover: "/img/mafia_old_country.jpg",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredGames = () => {
    let result = [...games];

    if (filter !== "all") {
      result = result.filter((g) =>
        g.platform.map((p) => p.toLowerCase()).includes(filter.toLowerCase())
      );
    }

    if (genreFilter !== "all") {
      result = result.filter(
        (g) => g.genre.toLowerCase() === genreFilter.toLowerCase()
      );
    }

    if (searchTerm.trim() !== "") {
      result = result.filter((g) =>
        g.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

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
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SideBar setGenreFilter={setGenreFilter} />
      <MainPage
        isDarkMode={isDarkMode}
        setFilter={setFilter}
        setSortOrder={setSortOrder}
        filteredGames={filteredGames}
      />
    </div>
  );
}

export default App;
