import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";

import "./App.css";
import MenuLeft from "./components/layout/menuLeft";

import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, blueTheme, darkTheme } from "./themes";

type Theme = "light" | "dark" | "blue";

import reducers from "./redux/ducks/index";

import { configureStore } from "@reduxjs/toolkit";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handlerTheme = (theme: any) => {
    if (theme.includes("light")) return lightTheme;
    if (theme.includes("dark")) return darkTheme;
    if (theme.includes("blue")) return blueTheme;
  };

  const store = configureStore({
    reducer: reducers,
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={handlerTheme(theme)}>
        <GlobalStyles />
        <MenuLeft />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
