import styled from "styled-components";
import Background from "../../assets/background.png";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  font-family: "SeoulHangangM";
`;

export const Header = styled.div`
  display: flex;
  padding: 57px 28px 10px 28px;
  gap: 5px;
  align-items: center;
`;

export const Shell = styled.span`
  font-size: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  color: #5c5c5c;
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
export const CopyContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  gap: 6px;
  border-radius: 8px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const CopyTitle = styled.span`
  font-size: 16px;
`;

export const CodeContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Code = styled.span`
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
  padding: 10px 0 32px 0;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  margin-top: 24px;
  border-bottom: 10px solid #f5f5f5;
`;

export const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 27.5px;
  font-size: 16px;
`;
export const Colum = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const Right = styled.img`
  margin-left: auto;
`;
export const Text = styled.div``;
export const Version = styled.div`
  margin-left: auto;
  color: #84c3ee;
`;

export const Out = styled.div`
  color: #ff0000;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding-top: 20px;
`;