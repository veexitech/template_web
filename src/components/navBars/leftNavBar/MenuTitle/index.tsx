import React from "react";
import { Container } from "./styles";

interface IMenuTitle {
  title: string;
}

const MenuTitle: React.FC<IMenuTitle> = (props) => {
  const { title } = props;

  return <Container>{title}</Container>;
};

export default MenuTitle;
