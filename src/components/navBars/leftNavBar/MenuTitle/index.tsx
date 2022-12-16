import React from "react";
import { Container } from "./styles";

interface IMenuTitle {
  title: string;
  style?: React.CSSProperties;
}

const MenuTitle: React.FC<IMenuTitle> = (props) => {
  const { title, style } = props;

  return <Container style={style}>{title}</Container>;
};

export default MenuTitle;
