import styled from "styled-components";
import Background from "@/assets/background.png";

export const Layout = styled.main`
  background-image: url(${Background});
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "SeoulHangangM";
  padding-bottom: 80px;
`;

export const Header = styled.header`
  padding: 57px 28px 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const CreateButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #84c3ee;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 28px;
`;

export const Description = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 20px;
  font-size: 14px;
`;

export const CapsuleCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CapsuleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CapsuleTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const CapsuleDate = styled.span`
  font-size: 12px;
  color: #666;
`;

export const CapsuleStatus = styled.div`
  margin-bottom: 8px;
`;

export const OpenedBadge = styled.span`
  background: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

export const LockedBadge = styled.span`
  background: #ff9800;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

export const OpenButton = styled.button`
  background: #84c3ee;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
`;

export const CapsuleContent = styled.div`
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  box-sizing: border-box;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  box-sizing: border-box;
`;

export const CreateCapsuleButton = styled.button`
  width: 100%;
  background: #84c3ee;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;