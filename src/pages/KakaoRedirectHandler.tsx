import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const KakaoRedirectHandler = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");

  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      window.location.href = "/named";
    } else {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  }, [accessToken, refreshToken]);

  return (
    <Layout>
      <Message>로그인 중...</Message>
    </Layout>
  );
};

export default KakaoRedirectHandler;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
`;
