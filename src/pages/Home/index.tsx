import * as S from "./style";
import ShellIcon from "@/components/Icons/Shell";
import Alerm from "@/components/Icons/Alerm";
import Market from "@/components/Icons/Market";
import HomeIcon from "@/components/Icons/Home";
import CalendarIcon from "@/components/Icons/Calendar";
import MyPageIcon from "@/components/Icons/Mypage";
import SeaOtter1 from "../../assets/seaOtter1.png";
import Heart from "@/components/Icons/Heart";
import Note from "@/components/Icons/Note";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleGoAnswer = () => {
    navigate("/choose-feel");
  };
  const GoList = () => {
    navigate("/list");
  };
  const GoCal = () => {
    navigate("/calendar");
  };
  const GoMyPage = () => {
    navigate("/my-page");
  };
  return (
    <S.Layout>
      <S.Header>
        <S.ShellContainer>
          <img src={ShellIcon} />
          <S.Shell>999</S.Shell>
        </S.ShellContainer>
        <S.IconContainer>
          <S.Icon src={Alerm} />
          <S.Icon src={Market} />
        </S.IconContainer>
      </S.Header>
      <S.MainContainer>
        <S.MeetTextCotainer>
          <>만난지</>
          <S.BlueText>7315</S.BlueText>
          <>일째</>
        </S.MeetTextCotainer>
        <S.MyGroupNames>
          <S.Name>띠연</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>김사장</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>엄마다</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>ㅅㅇ</S.Name>
        </S.MyGroupNames>
        <S.CharacterImg src={SeaOtter1} />
        <S.QuestionContainer onClick={handleGoAnswer}>
          <S.QuestionTitle>오늘의 질문 #1</S.QuestionTitle>
          <S.Question>서로를 볼 때 생각나는 동물은 무엇인가요?</S.Question>
        </S.QuestionContainer>
      </S.MainContainer>
      <S.Footer>
        <img src={HomeIcon} style={{ cursor: "pointer" }} />
        <img src={CalendarIcon} onClick={GoCal} style={{ cursor: "pointer" }} />
        <img src={Note} onClick={GoList} style={{ cursor: "pointer" }} />
        <img
          src={MyPageIcon}
          onClick={GoMyPage}
          style={{ cursor: "pointer" }}
        />
      </S.Footer>
    </S.Layout>
  );
};

export default Home;
