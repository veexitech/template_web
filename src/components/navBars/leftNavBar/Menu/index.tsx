import React from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Container, MenuTitle } from "./styles";
import MenuSubMenu from "./SubMenu";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "../MenuIcon";
const Menu: React.FC<any> = (props) => {
  const { menu } = props;
  const dispatch = useDispatch();
  const { menu_active } = useSelector((state: any) => state.menu);
  const isMenuActive = menu_active == menu.key;

  const HandleIconMenu: React.FC<any> = ({ subMenu }) => {
    if (!subMenu) return <></>;
    if (isMenuActive) return <FiMinus color={"#969ba3"} />;
    return <IoMdAdd color={"#969ba3"} />;
  };

  const handleClick = (e: any) => {
    dispatch({ type: "EDIT_MENU_ACTIVE", key: menu.key });
    e.preventDefault();
    console.log("The link was clicked.");
    // window.location.href = menu.subMenu ? undefined : menu.href;
  };

  return (
    <>
      <Container
        isOpen={isMenuActive}
        isActive={isMenuActive}
        onClick={handleClick}
        href={menu.subMenu ? undefined : menu.href}
      >
        <MenuIcon Icon={menu.icon} />
        <MenuTitle>{menu.title}</MenuTitle>
        <HandleIconMenu subMenu={menu.subMenu} />
      </Container>
      <MenuSubMenu subMenu={menu.subMenu} isOpen={isMenuActive} />
    </>
  );
};
export default Menu;
