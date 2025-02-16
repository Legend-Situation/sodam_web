import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const RegisterGroup = () => {
  const [inputGroup, setInputGroup] = useState("");
  const navigate = useNavigate();

  const handleInputGroup = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputGroup(e.target.value);
  };
  const GoHome = () => {
    navigate("/home");
  };
  return (
    <S.Layout>
      <S.Header>
        <span>그룹 참여하기</span>
      </S.Header>
      <S.MainContainer>
        <span>그룹 코드</span>
        <S.GroupNameInput
          placeholder="그룹 코드를 입력해주세요."
          value={inputGroup}
          onChange={handleInputGroup}
        />
      </S.MainContainer>
      <S.BtnContainer>
        <S.CheckBtn isActive={inputGroup.length > 0} onClick={GoHome}>
          확인
        </S.CheckBtn>
      </S.BtnContainer>
    </S.Layout>
  );
};

export default RegisterGroup;
