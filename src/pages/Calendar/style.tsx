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
export const EditImg = styled.img`
  margin: 80px 0 0 300px;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding-top: 20px;
  position: absolute;
  bottom: 40px;
`;
