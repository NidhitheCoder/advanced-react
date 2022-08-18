import React, { useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import { ThemeContext, themes } from "./themeContext";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(state.theme === themes.dark ? themes.light : themes.dark);
  };

  const state = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={state}>
      <div>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
