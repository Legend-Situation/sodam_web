// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import axios from "axios";
import * as S from "./style";
import LogoIcon from "@/icons/LogoIcon";
import CLogoIcon from "@/icons/CLogoIcon";
import { KAKAO_AUTH_URL } from "@/api";

const Main = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.Layout>
      <>
        <S.ProjectDetail>
          <S.Detail>소중한 순간, 함께 담아요</S.Detail>
          <S.Logo as={LogoIcon} />
        </S.ProjectDetail>
        <S.LoginContainer>
          <S.CLogo as={CLogoIcon} />
          <S.GoLogin onClick={handleKakaoLogin}>카카오 로그인</S.GoLogin>
        </S.LoginContainer>
      </>
    </S.Layout>
  );
};

export default Main;
