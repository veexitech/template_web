import React from "react";
import { ContainerMenus } from "./styles";
import Menu from "../Menu";
import { MENUS_CONFIGS } from "../../../../system/menu";
interface IMenuConfigs {}

const MenuConfigs: React.FC<IMenuConfigs> = (props) => {
  const {} = props;

  return (
    <ContainerMenus>
      {MENUS_CONFIGS.map((menu) => (
        <Menu menu={menu} />
      ))}
    </ContainerMenus>
  );
};

export default MenuConfigs;
