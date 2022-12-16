import styled from "styled-components";
import imgProfile from "../../../../assets/womanProfile.jpg";
export const Container = styled.div`
  display: flex;
  cursor: pointer;
  max-width: 100%;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
`;

export const ContainerImageProfile = styled.div`
  display: flex;
  /* border: 1px solid red; */
  align-items: flex-end;
`;
export const ImageProfile = styled.div`
  display: flex;
  min-width: 50px;
  height: 50px;
  border-radius: 100px;
  /* background-color: #cacaca; */
  background-image: url(${imgProfile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const StatusProfile = styled.div`
  display: flex;
  min-width: 15px;
  height: 15px;
  border-radius: 100px;
  background-color: green;
  margin-left: -16px;
`;

export const ContainerIconExit = styled.div`
  display: flex;
  min-width: 30px;
  height: 30px;

  background-color: #cacaca;
`;
export const ContainerInforProfile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #c2c6cf;
  width: calc(100% - 60px);
  height: auto;
`;
export const SubDataProfile = styled.div`
  font-size: 10px;
  color: inherit;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
`;
export const DataProfile = styled.div`
  font-size: 12px;
  color: inherit;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
  font-weight: bold;
`;
