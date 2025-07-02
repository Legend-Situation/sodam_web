import styled from "styled-components";
import Background from "@/assets/background.png";
import EditIcon from "@/components/Icons/Edit";

interface ModalProps {
  isOpen: boolean;
}

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

export const EditImg = styled(EditIcon)`
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

export const Modal = styled.div<ModalProps>`
  position: fixed;
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 350px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px 20px 0 0; /* 상단 좌우 모서리만 둥글게 */
  padding: 20px;
`;

export const Input = styled.textarea`
  width: 350px;
  height: 200px;
  background: #f9f9f9;
  border-radius: 8px;
  border: none;
  margin-left: 5px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
  ::placeholder {
    color: #c2c2c2;
    text-align: left;
    vertical-align: top;
    font-size: 14px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
`;
