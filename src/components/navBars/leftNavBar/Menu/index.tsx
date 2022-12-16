import React from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Container } from "./styles";
import MenuTitle from "../MenuTitle";
import MenuSubMenu from "./SubMenu";

const Menu: React.FC<any> = (props) => {
  const { menu } = props;
  const [isOpen, setIsOpen] = React.useState(false);

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

  return (
    <>
      <Container isOpen={isOpen} onClick={() => handleClick()}>
        {menu.icon && menu.icon}
        <MenuTitle title={menu.title} />
        <HandleIconMenu subMenu={menu.subMenu} />
      </Container>
      <MenuSubMenu subMenu={menu.subMenu} isOpen={isOpen} />
    </>
  );
};
export default Menu;
