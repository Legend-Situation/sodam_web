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

export const Header = styled.header`
  padding: 62px 0 10px 0;
  font-size: 16px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 159px 0 42px 0;
  font-size: 18px;
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

export const CheckBtn = styled.button`
  width: 85%;
  padding: 12px 0;
  bottom: 64px;
  font-size: 16px;
  background-color: #84c3ee;
  border-radius: 8px;
  color: #fff;
  outline: none;
  cursor: pointer;
  position: absolute;
`;
