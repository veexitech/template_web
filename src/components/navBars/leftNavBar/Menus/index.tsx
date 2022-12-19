import React from "react";
import { ContainerMenus } from "./styles";
import Menu from "../Menu";
import { MENU } from "../../../../system/menu";
import { useTheme } from "styled-components";

interface IMenus {}

const Menus: React.FC<IMenus> = (props) => {
  const theme = useTheme();
  const [menuActive, setMenuActive] = React.useState<number>();
  const {} = props;

  return (
    <ContainerMenus>
      {MENU(theme).map((menu, index) => (
        <Menu menu={menu} />
      ))}
    </ContainerMenus>
  );
};

export default Menus;
