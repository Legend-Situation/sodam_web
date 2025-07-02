import * as S from "./style";

const Main = () => {
  const handleKakaoLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/kakao`;
  };

  return (
    <S.Layout>
      <>
        <S.ProjectDetail>
          <S.Detail>소중한 순간, 함께 담아요</S.Detail>
          <S.Logo />
        </S.ProjectDetail>
        <S.LoginContainer onClick={handleKakaoLogin}>
          <S.CLogo />
          <S.GoLogin>카카오 로그인</S.GoLogin>
        </S.LoginContainer>
      </>
    </S.Layout>
  );
};

export default Main;
