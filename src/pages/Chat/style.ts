import styled from "styled-components";
import Background from "@/assets/background.png";
import ArrowIcon from "@/components/Icons/Arrow";

export const Layout = styled.main`
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "SeoulHangangM";
`;
export const Header = styled.header`
  padding: 57px 28px 30px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Arrow = styled(ArrowIcon)`
  position: absolute;
  left: 20px;
`;
export const Question = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;
export const OtherChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 27px;
  font-size: 14px;
`;
export const Chat = styled.span`
  margin-top: 3px;
  background-color: #ececec;
  padding: 2px 10px;
  border-radius: 8px;
  width: fit-content;
  font-size: 16px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7%;
  background-color: white;
`;
export const Input = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  padding: 0 20px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const MyChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 27px;
  font-size: 14px;
`;

export const MyChat = styled.span`
  margin-top: 3px;
  background-color: #ececec;
  padding: 2px 10px;
  border-radius: 8px;
  width: fit-content;
  font-size: 16px;
`;
