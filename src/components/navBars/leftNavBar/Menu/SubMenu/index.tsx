import { ContainerSubMenu, SubMenu, MenuTitle } from "./styles";
import { useTheme } from "styled-components";

const MenuSubMenu: React.FC<any> = ({ subMenu, isOpen }) => {
  const theme = useTheme();

  return (
    <ContainerSubMenu>
      {subMenu &&
        subMenu.map((submenu: any) => {
          return (
            <SubMenu isOpen={isOpen}>
              <MenuTitle>{submenu.title}</MenuTitle>
            </SubMenu>
          );
        })}
    </ContainerSubMenu>
  );
};
export default MenuSubMenu;
