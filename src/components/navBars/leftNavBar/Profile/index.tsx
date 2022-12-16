import React from "react";
import {
  Container,
  ContainerInforProfile,
  DataProfile,
  StatusProfile,
  ContainerImageProfile,
  ImageProfile,
  SubDataProfile,
} from "./styles";

interface IProfile {}

const Profile: React.FC<IProfile> = (props) => {
  const {} = props;

  return (
    <Container>
      <ContainerImageProfile>
        <ImageProfile></ImageProfile>
        <StatusProfile></StatusProfile>
      </ContainerImageProfile>
      <ContainerInforProfile>
        <DataProfile>Elisabeth Draka</DataProfile>
        <SubDataProfile>
          leandro.sacramento98@gmail.com222222222222
        </SubDataProfile>
      </ContainerInforProfile>
      {/* <ContainerIconExit></ContainerIconExit> */}
    </Container>
  );
};

export default Profile;
