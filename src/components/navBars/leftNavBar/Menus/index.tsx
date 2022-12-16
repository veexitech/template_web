import React from "react";
import { Container, ContainerMenus } from "./styles";
import MenuTitle from "../MenuTitle";
import MenuIcon from "../MenuIcon";
interface IMenus {}

const Menus: React.FC<IMenus> = (props) => {
  const {} = props;
  const MenusOptions = [
    { title: "Home", icon: null, href: "" },
    { title: "Dashboard", icon: null, href: "" },
    { title: "Projects", icon: null, href: "" },
    { title: "Tasks", icon: null, href: "" },
    { title: "Settings", icon: null, href: "" },
    { title: "Messages", icon: null, href: "" },
  ];

  return (
    <ContainerMenus>
      {MenusOptions.map((menu) => (
        <Container>
          <MenuIcon />
          <MenuTitle title={menu.title} />
        </Container>
      ))}
    </ContainerMenus>
  );
};

export default Menus;
