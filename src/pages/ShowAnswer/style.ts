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
`;
export const Header = styled.header`
  padding: 57px 28px 30px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const WriteIcon = styled.img`
  position: absolute;
  left: 28px;
`;
export const CloseIcon = styled.img`
  position: absolute;
  right: 28px;
`;
export const Title = styled.span`
  font-size: 16px;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 27px;
`;
export const QuestionNumberContainer = styled.div`
  display: flex;
  gap: 12px;
  font-size: 12px;
  padding-bottom: 10px;
`;
export const Question = styled.div`
  font-size: 16px;
`;
export const MemberFeelContainer = styled.div`
  display: flex;
  padding: 16px 30px;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
export const FeelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.span`
  font-size: 12px;
`;
export const Answer1 = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  padding: 16px;
`;
export const Detial = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
`;
export const AnswerText1 = styled.div`
  padding-top: 8px;
  font-size: 14px;
`;
export const Answer2 = styled.div`
  margin-top: 12px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  padding: 16px;
`;
export const ChatIcon = styled.img`
  position: absolute;
  bottom: 30px;
  right: 20px;
`;
