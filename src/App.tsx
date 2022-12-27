import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";

import "./App.css";
import MenuLeft from "./components/layout/menuLeft";
import Routes from "./routes/";

import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, blueTheme, darkTheme } from "./themes";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

type Theme = "light" | "dark" | "blue";
import { persistStore, persistReducer } from "redux-persist";

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
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
      <ThemeProvider theme={handlerTheme(theme)}>
        <GlobalStyles />

        <Routes />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
