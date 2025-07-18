import styled from "styled-components";
import Background from "@/assets/background.png";
import EditIcon from "@/assets/edit.svg";

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

export const EditImg = styled.img.attrs({
    src: EditIcon,
})`
    margin: 80px 0 0 300px;
`;

export const Modal = styled.div<ModalProps>`
    position: fixed;
    bottom: ${({ isOpen }: ModalProps) => (isOpen ? "0" : "-100%")};
    left: 0;
    width: 100%;
    height: 350px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px 20px 0 0;
    padding: 20px;
`;

export const Input = styled.textarea`
    width: 350px;
    height: 200px;
    background: #ffffff;
    color: #000000;
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

export const SaveButton = styled.button`
    width: 100%;
    background: #84c3ee;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 12px;
    
    &:hover {
        background: #6bb3e0;
    }
`;