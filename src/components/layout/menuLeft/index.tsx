import React from "react";
import { Container, ContainerContent, ContainerMenu } from "./styles";
import LeftNavBar from "../../navBars/leftNavBar";
import { FaTachometerAlt } from "react-icons/fa";

interface ImenuLeft {
  children: React.ReactElement;
}

const menuLeft: React.FC<ImenuLeft> = (props) => {
  const { children } = props;
  console.log("##### -> children", children);
  return (
    <Container>
      <ContainerMenu>
        <LeftNavBar />
      </ContainerMenu>
      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
};

export default menuLeft;
