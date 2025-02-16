// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import axios from "axios";
import * as S from "./style";
import Logo from "../../assets/logo.svg";
import CLogo from "../../assets/cLogo.svg";

const KAKAO_AUTH_URL =
  "https://kauth.kakao.com/oauth/authorize?client_id=e806ebc88c2f245ecc486989b4446889&redirect_uri=http://localhost:5173/login/oauth2/code/kakao&response_type=code";

const Main = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.Layout>
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
    </S.Layout>
  );
};

export default Main;
