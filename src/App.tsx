import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ThemeProvider } from "styled-components";

import "./App.css";
import MenuLeft from "./components/layout/menuLeft";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, blueTheme, darkTheme } from "./themes";
type Theme = "light" | "dark" | "blue";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handlerTheme = (theme: any) => {
    if (theme.includes("light")) return lightTheme;
    if (theme.includes("dark")) return darkTheme;
    if (theme.includes("blue")) return blueTheme;
  };
  return (
    <>
      <ThemeProvider theme={handlerTheme(theme)}>
        <GlobalStyles />
        <MenuLeft />
      </ThemeProvider>
    </>
  );
};

export default App;
