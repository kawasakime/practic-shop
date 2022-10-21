import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Home from "./pages/Home";
import { baseTheme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Home /> */}
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
