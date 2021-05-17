import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <div className="header-tags">
        <img src="logo.png" alt="" className="header-logo" height="40px" />
        <h1>Notes</h1>
      </div>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle-button"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
