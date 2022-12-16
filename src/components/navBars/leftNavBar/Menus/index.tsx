import React from "react";
import { ContainerMenus } from "./styles";
import Menu from "../Menu";
import { MENU } from "../../../../system/menu";

interface IMenus {}

const Menus: React.FC<IMenus> = (props) => {
  const {} = props;

  return (
    <ContainerMenus>
      {MENU.map((menu, index) => (
        <Menu menu={menu} />
      ))}
    </ContainerMenus>
  );
};

export default Menus;
