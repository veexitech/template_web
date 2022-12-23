import React from "react";
import { Container, ContainerContent, ContainerMenu } from "./styles";
import LeftNavBar from "../../navBars/leftNavBar";
import { FaTachometerAlt } from "react-icons/fa";

interface ImenuLeft {}

const menuLeft: React.FC<ImenuLeft> = (props) => {
  return (
    <Container>
      <ContainerMenu>
        <LeftNavBar />
      </ContainerMenu>
      <ContainerContent></ContainerContent>
    </Container>
  );
};

export default menuLeft;
