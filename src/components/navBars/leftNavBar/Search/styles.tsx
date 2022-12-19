import styled from "styled-components";
import StylesMenu from "../Menu/stylesMenu";

export const Container = styled.div`
  display: flex;
  display: flex;
  height: 40px;
  background-color: ${StylesMenu.backgroundColorHover};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  .inputSearch {
    background-color: transparent;
    flex: 1;
  }
`;
