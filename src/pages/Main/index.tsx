import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./style";
import Logo from "../../assets/logo.svg";
import CLogo from "../../assets/cLogo.svg";

const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?client_id=e806ebc88c2f245ecc486989b4446889&redirect_uri=http://192.168.0.132:8080/login/oauth2/code/kakao&response_type=code";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get("code");
    if (code) {
      const login = async () => {
        setLoading(true);
        try {
          const response = await axios.post("http://192.168.0.132:8080/users/login", { code });
          console.log("로그인 성공:", response.data);
          navigate("/named");
        } catch (error) {
          console.error("로그인 실패:", error);
          alert("로그인에 실패했습니다. 다시 시도해주세요.");
        } finally {
          setLoading(false);
        }
      };
      login();
    }
  }, [location, navigate]);

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.Layout>
      {loading ? (
        <div>로딩 중...</div>
      ) : (
        <>
            <S.ProjectDetail>
              <S.Detail>소중한 순간, 함께 담아요</S.Detail>
              <S.Logo src={Logo} />
            </S.ProjectDetail>
            <S.LoginContainer>
              <S.CLogo src={CLogo} />
              <S.GoLogin onClick={handleKakaoLogin}>카카오 로그인</S.GoLogin>
            </S.LoginContainer>
        </>
      )}
    </S.Layout>
  );
};

export default Main;