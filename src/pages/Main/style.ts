import styled from "styled-components";
import Background from "@/assets/background.png";
import LogoIcon from "@/components/Icons/Logo";
import CLogoIcon from "@/components/Icons/CLogo";

export const Layout = styled.main`
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: "SeoulHangangM";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Detail = styled.span`
  font-size: 16px;
  color: #5c5c5c;
`;

export const Logo = styled(LogoIcon)`
  width: fit-content;
`;

export const LoginContainer = styled.div`
  width: 80%;
  background-color: #fee500;
  padding: 15.5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  bottom: 30px;
  cursor: pointer;
`;

export const CLogo = styled(CLogoIcon)`
  position: fixed;
  left: 55px;
`;
export const GoLogin = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: black;
`;
