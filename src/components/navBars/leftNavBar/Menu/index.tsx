import React from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Container, MenuTitle } from "./styles";
import MenuSubMenu from "./SubMenu";
import { useDispatch, useSelector } from "react-redux";

const Menu: React.FC<any> = (props) => {
  const { menu } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { menus_active } = useSelector((state: any) => state.menu);
  console.log("##### -> menus_active", menus_active);

  React.useEffect(() => {
    // dispatch({ type: "ADD_MENU", menu: MENU(theme) });
  }, []);

  const HandleIconMenu: React.FC<any> = ({ subMenu }) => {
    if (!subMenu) return <></>;
    if (isOpen) return <FiMinus color={"#969ba3"} />;
    return <IoMdAdd color={"#969ba3"} />;
  };

  const handleClick = () => {
    if (menu?.subMenu) {
      setIsOpen((prevState) => !prevState);
    }
  };
  const isMenuActive = menus_active.indexOf(menu.key) >= 0;
  return (
    <>
      <Container
        isOpen={isMenuActive}
        isActive={isMenuActive}
        onClick={() => dispatch({ type: "EDIT_MENU_ACTIVE", key: menu.key })}
      >
        {menu.icon && menu.icon}
        <MenuTitle>{menu.title}</MenuTitle>
        <HandleIconMenu subMenu={menu.subMenu} />
      </Container>
      <MenuSubMenu subMenu={menu.subMenu} isOpen={isMenuActive} />
    </>
  );
};
export default Menu;
