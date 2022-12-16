import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MenuLeft from "./components/layout/menuLeft";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MenuLeft />
    </>
  );
};

export default App;
