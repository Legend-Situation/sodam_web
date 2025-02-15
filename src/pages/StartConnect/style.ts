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
  padding: 62px 28px 0 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 139px 28px;
  font-size: 20px;
  color: #5c5c5c;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChrImg = styled.img`
  width: 154px;
`;

export const SendConnectContainer = styled.div`
  padding: 133px 27px 0 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SendBtn = styled.button`
  width: 100%;
  padding: 12px 0;
  bottom: 64px;
  font-size: 16px;
  background-color: #84c3ee;
  border-radius: 8px;
  color: #fff;
  outline: none;
  cursor: pointer;
`;

export const OrContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 0;
`;
export const Line = styled.div`
  width: 41%;
  border-bottom: 1px solid #dfdfdf;
`;
export const Or = styled.span`
  color: #dfdfdf;
`;
export const ConnectBtn = styled.button`
  width: 100%;
  padding: 12px 0;
  bottom: 64px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 8px;
  color: #84c3ee;
  border: 1px solid #84c3ee;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
