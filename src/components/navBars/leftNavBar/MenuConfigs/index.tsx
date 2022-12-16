import React from "react";
import { Container, ContainerMenus } from "./styles";
import MenuTitle from "../MenuTitle";
import MenuIcon from "../MenuIcon";
interface IMenuConfigs {}

const MenuConfigs: React.FC<IMenuConfigs> = (props) => {
  const {} = props;

  return (
    <ContainerMenus>
      <Container>
        <MenuIcon />
        <MenuTitle title="Messages" />
      </Container>
      <Container>
        <MenuIcon />
        <MenuTitle title="Support" />
      </Container>
    </ContainerMenus>
  );
};

export default MenuConfigs;
