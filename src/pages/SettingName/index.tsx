import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const SettingName = () => {
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputName(e.target.value);
  };

  const handleConfirm = () => {
    if (inputName.length > 0) {
      navigate("/start-content");
    }
  };

  return (
    <S.Layout>
      <S.Title>닉네임 설정</S.Title>
      <S.MainContainer>
        <S.StartNamedcomment>
          시작하기 전! 멋진 닉네임을 만들어볼까요?
        </S.StartNamedcomment>
        <S.Named
          placeholder="닉네임을 입력해주세요. (최대 10자)"
          value={inputName}
          onChange={handleChange}
        />
      </S.MainContainer>
      <S.CheckBtn isActive={inputName.length > 0} onClick={handleConfirm}>
        확인
      </S.CheckBtn>
    </S.Layout>
  );
};

export default SettingName;