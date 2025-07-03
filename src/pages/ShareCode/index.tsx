import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import CopyIcon from "@/assets/copyIcon.svg";

const ShareCode = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const code = localStorage.getItem("inviteCode") ?? "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("복사 실패:", error);
    }
  };

  const handleConfirm = () => {
    navigate("/home");
  };

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
          <S.Code>{code}</S.Code>
          <img
            src={CopyIcon}
            onClick={handleCopy}
            style={{ cursor: "pointer" }}
          />
        </S.CodeContainer>
      </S.CopyContainer>

      {copied && <S.CopiedMessage>코드가 복사되었습니다.</S.CopiedMessage>}

      <S.CheckBtn onClick={handleConfirm}>확인</S.CheckBtn>
    </S.Layout>
  );
};

export default ShareCode;
