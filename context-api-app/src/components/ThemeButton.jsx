import React from "react";
import { ThemeContext } from "../themeContext";

const ThemeButton = () => {
  return (
    <ThemeContext.Consumer>
      {(themeValue) => (
        <div>
          <button className={themeValue.theme} onClick={themeValue.toggleTheme}>{themeValue.theme}</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeButton;
