import * as S from "./style";
import ShellIcon from "../../assets/shell.svg";
import Alerm from "../../assets/alerm.svg";
import Market from "../../assets/market.svg";
import HomeIcon from "../../assets/home.svg";
import CalendarIcon from "../../assets/calendar.svg";
import MyPageIcon from "../../assets/mypage.svg";
import SeaOtter1 from "../../assets/seaOtter1.png";
import Heart from "../../assets/heart.svg";

const Home = () => {
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
          <S.BlueText>303</S.BlueText>
          <>일째</>
        </S.MeetTextCotainer>
        <S.MyGroupNames>
          <S.Name>띵용닝</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>닉네임</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>닉네임</S.Name>
        </S.MyGroupNames>
        <S.CharacterImg src={SeaOtter1} />
        <S.QuestionContainer>
          <S.QuestionTitle>오늘의 질문 #1</S.QuestionTitle>
          <S.Question>서로를 볼 때 생각나는 동물은 무엇인가요?</S.Question>
        </S.QuestionContainer>
      </S.MainContainer>
      <S.Footer>
        <img src={HomeIcon} style={{ cursor: "pointer" }} />
        <img src={CalendarIcon} style={{ cursor: "pointer" }} />
        <img src={MyPageIcon} style={{ cursor: "pointer" }} />
      </S.Footer>
    </S.Layout>
  );
};

export default Home;
