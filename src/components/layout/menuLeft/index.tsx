import React from "react";
import { Container, ContainerContent, ContainerMenu } from "./styles";

interface ImenuLeft {}

const menuLeft: React.FC<ImenuLeft> = (props) => {
  const {} = props;

  return (
    <Container>
      <ContainerMenu></ContainerMenu>
      <ContainerContent></ContainerContent>
    </Container>
  );
};

export default menuLeft;
