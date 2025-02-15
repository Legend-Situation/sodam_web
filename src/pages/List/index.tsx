import { useNavigate } from "react-router-dom";
import * as S from "./style";

const List = () => {
  const navigate = useNavigate();
  const GoQuestion = () => {
    navigate("/show-answer")
  }
  return (
    <S.Layout>
      <S.Header>
        <span>리스트</span>
      </S.Header>
      <S.QuestionContainer onClick={GoQuestion}>
        <S.FirstLine>
          <S.BlueText>질문 #1</S.BlueText>
          <S.Date>2025월 2월 16일 일요일</S.Date>
        </S.FirstLine>
        <S.Question>서로를 볼 때 생각나는 동물은 무엇인가요?</S.Question>
      </S.QuestionContainer>
    </S.Layout>
  );
};

export default List;
