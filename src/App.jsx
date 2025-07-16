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
  return (
    <div className={` d-grid ${styles.app}`}>
      <Header
        title="GamesFlix"
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <SideBar />
      <MainPage isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
