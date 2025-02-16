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

export const Modal = styled.div`
  position: fixed;
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
`;