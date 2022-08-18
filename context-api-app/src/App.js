import React, { createContext } from "react";
import "./App.css";

const themeContext = createContext("light");

const ThemeButton = () => {
  return (
    <themeContext.Consumer>
      {(themeValue) => (
        <div>
          <button className={themeValue}>{themeValue}</button>
        </div>
      )}
    </themeContext.Consumer>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemeButton />
    </div>
  );
};

function App() {
  return (
    <themeContext.Provider value="dark">
      <Toolbar />
    </themeContext.Provider>
  );
}

export default App;
