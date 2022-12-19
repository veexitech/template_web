import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ThemeProvider } from "styled-components";

import "./App.css";
import MenuLeft from "./components/layout/menuLeft";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./themes";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <MenuLeft />
      </ThemeProvider>
    </>
  );
};

export default App;
