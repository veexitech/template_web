import { ContainerSubMenu, SubMenu } from "./styles";
import MenuTitle from "../../MenuTitle";

const MenuSubMenu: React.FC<any> = ({ subMenu, isOpen }) => {
  return (
    <ContainerSubMenu>
      {subMenu &&
        subMenu.map((submenu: any) => {
          return (
            <SubMenu isOpen={isOpen}>
              <MenuTitle style={{ color: "#cacaca" }} title={submenu.title} />
            </SubMenu>
          );
        })}
    </ContainerSubMenu>
  );
};
export default MenuSubMenu;
