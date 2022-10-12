import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App"></div>;
    </ThemeProvider>
  );
}

export default App;
