import styled from "styled-components";
import Background from "../../assets/background.png";

export const Layout = styled.main`
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "SeoulHangangM";
  position: relative;
`;

export const Title = styled.span`
  padding: 57px 0;
  font-size: 16px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 154px 0;
`;

export const StartNamedcomment = styled.span`
  font-size: 16px;
  color: #1d1e1f;
`;

export const Named = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #84c3ee;
  padding: 12px 16px;
  outline: none;
  font-size: 16px;
  background-color: #ffffff;
  color: #000000;
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
