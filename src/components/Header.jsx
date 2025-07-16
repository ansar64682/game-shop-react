import React from "react";
import PropTypes from "prop-types";
import styles from "../assets/css/AppLayout.module.css";

function Header({ isDarkMode, toggleDarkMode, title }) {
  return (
    <div
      className={`d-flex align-items-center justify-content-between ${styles.header}`}
    >
      {/* Left: Logo/Title */}
      <div>
        <h3 className="text-light m-0">{title}</h3>
      </div>

      {/* Center: Stylish Search */}
      <div className="flex-grow-1 mx-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-pill px-3"
            placeholder="Search games..."
            aria-label="Search"
          />
          <button
            className="btn btn-outline-light rounded-pill ms-2"
            type="button"
          >
            Search
          </button>
        </div>
      </div>

      {/* Right: Toggle Switch */}
      <div className="form-check form-switch text-light">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />

        <label className="form-check-label" htmlFor="darkModeSwitch">
          {isDarkMode ? "Dark" : "Light"}
        </label>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
