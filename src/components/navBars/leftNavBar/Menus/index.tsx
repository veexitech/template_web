import React from "react";
import { ContainerMenus } from "./styles";
import Menu from "../Menu";
import { MENU } from "../../../../system/menu";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

interface IMenus {}

const Menus: React.FC<IMenus> = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const menu = useSelector((state: any) => state.menu);

  React.useEffect(() => {
    dispatch({ type: "ADD_MENU", menu: MENU(theme) });
  }, []);

  return (
    <ContainerMenus>
      {menu?.menus_filter.map((menu: any, index: any) => (
        <Menu menu={menu} />
      ))}
    </ContainerMenus>
  );
};

export default Menus;
