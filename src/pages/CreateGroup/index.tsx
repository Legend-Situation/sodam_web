import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useCreateGroupMutation } from "@/api";

const CreateGroup = () => {
  const [inputGroup, setInputGroup] = useState("");
  const [inputDate, setInputDate] = useState("");
  const navigate = useNavigate();
  const createGroup = useCreateGroupMutation();

  const handleInputGroup = (e: any) => {
    setInputGroup(e.target.value);
  };

  const handleInputDate = (e: any) => {
    setInputDate(e.target.value);
  };

  const handleConfirm = () => {
    if (inputGroup.length > 0 && inputDate.length > 0) {
      createGroup.mutate(
        { name: inputGroup, startedAt: inputDate },
        {
          onSuccess: (data: any) => {
            const invite = data.data?.inviteCode;
            if (invite) {
              localStorage.setItem("inviteCode", invite);
            }
            navigate("/share-code");
          },
        }
      );
    }
  };

  return (
    <S.Layout>
      <S.Header>
        <span>그룹 생성하기</span>
      </S.Header>
      <S.MainContainer>
        <span>그룹 이름</span>
        <S.GroupNameInput
          placeholder="그룹 이름을 입력해주세요. (최대 10자)"
          value={inputGroup}
          onChange={handleInputGroup}
        />
        <span>관계 시작 날짜</span>
        <S.StartDateInput
          placeholder="2000/01/01"
          value={inputDate}
          onChange={handleInputDate}
        />
      </S.MainContainer>
      <S.BtnContainer>
        <S.CheckBtn
          isActive={inputGroup.length > 0 && inputDate.length > 0}
          onClick={handleConfirm}
        >
          확인
        </S.CheckBtn>
      </S.BtnContainer>
    </S.Layout>
  );
};

export default CreateGroup;
