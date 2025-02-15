import * as S from "./style";
import CopyIcon from "../../assets/copyIcon.svg";

const ShareCode = () => {
  return (
    <S.Layout>
      <S.Header>
        <span>그룹 생성하기</span>
      </S.Header>
      <S.MainContainer>
        <span>초대 코드를 성공적으로 완성했어요!</span>
        <span>함께하고 싶은 사람에게 공유해보세요.</span>
      </S.MainContainer>
      <S.CopyContainer>
        <S.CopyTitle>나의 코드 복사</S.CopyTitle>
        <S.CodeContainer>
          <S.Code>ABCDCDE</S.Code>
          <img src={CopyIcon} />
        </S.CodeContainer>
      </S.CopyContainer>
      <S.CheckBtn>확인</S.CheckBtn>
    </S.Layout>
  );
};

export default ShareCode;
