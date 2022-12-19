import React from "react";
import { Container } from "./styles";
import StyleIconMenu from "../Menu/stylesMenu";
import { BiSearchAlt } from "react-icons/bi";

interface ISearch {}

const Search: React.FC<ISearch> = (props) => {
  const {} = props;

  return (
    <Container>
      <BiSearchAlt
        size={StyleIconMenu.size}
        style={{ minWidth: 22 }}
        color={StyleIconMenu.color}
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
