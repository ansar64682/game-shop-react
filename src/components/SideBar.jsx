import React, { useState } from "react";
import styles from "../assets/css/AppLayout.module.css";

const genres = [
  { name: "Action", icon: "bi-controller" },
  { name: "Adventure", icon: "bi-map" },
  { name: "RPG", icon: "bi-magic" },
  { name: "Shooter", icon: "bi-bullseye" },
  { name: "Horror", icon: "bi-emoji-dizzy" },
  { name: "Simulator", icon: "bi-pc-display" },
  { name: "Strategy", icon: "bi-lightbulb" },
  { name: "Racing", icon: "bi-speedometer2" },
  { name: "Open World", icon: "bi-globe" },
];

function SideBar({ setGenreFilter }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${styles.sidebar} ${isOpen ? "" : styles.hiddenSidebar}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="text-light mb-0">Genres</h5>
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className={`bi ${isOpen ? "bi-chevron-left" : "bi-chevron-right"}`}
          ></i>
        </button>
      </div>

      {isOpen && (
        <ul className="list-unstyled d-flex flex-column gap-3">
          {genres.map((genre, index) => (
            <li
              key={index}
              className="d-flex align-items-center gap-2 px-2 py-2 text-light bg-dark rounded shadow-sm genre-item"
              style={{ cursor: "pointer" }}
              onClick={() => setGenreFilter(genre.name)} // 👈 The actual change
            >
              <i className={`bi ${genre.icon}`}></i>
              <span>{genre.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SideBar;
