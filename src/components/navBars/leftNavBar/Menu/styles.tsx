import styled from "styled-components";
import StylesMenu from "./stylesMenu";
export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0 20px 0;
  transition: all 0.5s;
  flex: 1;
`;
export const Container = styled.a<any>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.5s;
  ${(props) =>
    props.isOpen && `background-color: ${StylesMenu.backgroundColorHover};`}
  &:hover {
    background-color: ${StylesMenu.backgroundColorHover};
  }
`;
export const SubMenu = styled.a<any>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  ${(props) => !props.isOpen && `display:none;`}
  transition: all 0.5s;
  &:hover {
    background-color: rgb(40, 47, 59);
  }
`;
export const ContainerSubMenu = styled.div`
  display: flex;
  border-left: 2px solid rgb(45, 53, 73);
  flex-direction: column;
  padding-left: 10px;
  margin-left: 10px;
  transition: all 0.5s;
`;
