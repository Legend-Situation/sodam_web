import styled from "styled-components";
import Background from "../../assets/background.png";

export const Layout = styled.main`
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "SeoulHangangM";
`;
export const Header = styled.header`
  padding: 57px 28px 10px 28px;
  display: flex;
`;
export const ShellContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Shell = styled.span`
  font-size: 16px;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;
export const Icon = styled.img`
  width: 24px;
`;
export const MainContainer = styled.div`
  padding: 70px 28px 100px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MeetTextCotainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;
export const BlueText = styled.span`
  padding-left: 10px;
  color: #84c3ee;
  font-size: 20px;
`;
export const Name = styled.span`
  font-size: 16px;
`;
export const HeartIcon = styled.img`
  width: 16px;
  height: 16px;
  padding: 0 8px;
`;
export const MyGroupNames = styled.div`
  padding: 10px 0 100px 0;
  display: flex;
  align-items: center;
`;
export const CharacterImg = styled.img`
  padding-top: 10px;
  width: 110px;
  padding-bottom: 50px;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #84c3ee;
  padding: 16px 36px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;
export const QuestionTitle = styled.span`
  font-size: 14px;
  color: #5c5c5c;
`;
export const Question = styled.div`
  padding-top: 5px;
  font-size: 14px;
  color: #5c5c5c;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding-top: 20px;
`;
