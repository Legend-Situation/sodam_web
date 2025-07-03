import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Note from "@/assets/dartlist.svg";
import HomeIcon from "@/assets/grayhome.svg";
import CalendarIcon from "@/assets/calendar.svg";
import MyPageIcon from "@/assets/mypage.svg";
import { useGroupQuestionsQuery } from "@/api";

const List = () => {
  const navigate = useNavigate();
  const { data } = useGroupQuestionsQuery(1);

  const GoQuestion = () => {
    navigate("/show-answer");
  };
  const GoHome = () => {
    navigate("/home");
  };
  const GoCal = () => {
    navigate("/calendar");
  };
  const GoMyPage = () => {
    navigate("/my-page");
  };

  const questions = data?.data.questions || [];

  return (
    <S.Layout>
      <S.Header>
        <span>리스트</span>
      </S.Header>
      {questions.map((q: any) => (
        <S.QuestionContainer key={q.id} onClick={GoQuestion}>
          <S.FirstLine>
            <S.BlueText>질문 #{q.id}</S.BlueText>
            <S.Date>{q.date}</S.Date>
          </S.FirstLine>
          <S.Question>{q.content}</S.Question>
        </S.QuestionContainer>
      ))}
      <S.Footer>
        <img src={HomeIcon} onClick={GoHome} style={{ cursor: "pointer" }} />
        <img src={CalendarIcon} onClick={GoCal} style={{ cursor: "pointer" }} />
        <img src={Note} style={{ cursor: "pointer" }} />
        <img src={MyPageIcon} onClick={GoMyPage} style={{ cursor: "pointer" }} />
      </S.Footer>
    </S.Layout>
  );
};

export default List;
