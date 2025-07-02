import styled from "styled-components";
import Background from "../../assets/background.png";

export const Layout = styled.main`
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "SeoulHangangM";
  position: relative;
  font-size: 16px;
`;

export const Header = styled.header`
  padding: 62px 28px 10px 10px;
  text-align: center;
`;

export const MainContainer = styled.div`
  padding: 10px 28px 0 28px;
  display: flex;
  flex-direction: column;
`;

export const GroupNameInput = styled.input`
  width: 90%;
  border-radius: 8px;
  border: 1px solid #84c3ee;
  padding: 12px 16px;
  outline: none;
  font-size: 16px;
  margin: 8px 0 20px 0;
  background-color: #ffffff;
  color: #000000;
`;

export const StartDateInput = styled.input`
  width: 90%;
  border-radius: 8px;
  border: 1px solid #84c3ee;
  padding: 12px 16px;
  outline: none;
  font-size: 16px;
  margin: 8px 0 20px 0;
  background-color: #ffffff;
  color: #000000;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CheckBtn = styled.button<{ isActive: boolean }>`
  position: absolute;
  width: 80%;
  padding: 12px 0;
  bottom: 64px;
  background-color: ${(props: any) =>
    props.isActive ? "#84C3EE" : "#dfdfdf"};
  border-radius: 8px;
  color: ${(props: any) => (props.isActive ? "#ffffff" : "#8a8a8a")};
  border: none;
  cursor: ${(props: any) => (props.isActive ? "pointer" : "default")};
`;
