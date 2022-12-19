import React from "react";
import { Container } from "./styles";
import StyleIconMenu from "../Menu/stylesMenu";
import { BiSearchAlt } from "react-icons/bi";
import { useTheme } from "styled-components";

interface ISearch {}

const Search: React.FC<ISearch> = (props) => {
  const {} = props;
  const theme = useTheme();

  return (
    <Container>
      <BiSearchAlt
        size={theme.menu.icon.size}
        style={{ minWidth: 22 }}
        color={theme.menu.icon.color.default}
      />
      <input
        className="inputSearch"
        type="text"
        placeholder="Pesquisar"
      ></input>
    </Container>
  );
};

export default Search;
