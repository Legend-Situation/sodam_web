import * as S from "./style";
import Write from "../../assets/write.svg";
import Close from "../../assets/close.svg";
import Happy from "../../assets/happy.png";
import Blur from "../../assets/blur.svg";
import Chat from "../../assets/chat.svg";
import { useNavigate } from "react-router-dom";

const ShowAnswer = () => {
  const navigate = useNavigate();

  const handleGo = () => {
    navigate("/choose-feel");
  };

  const GoClose = () => {
    navigate("/home");
  };

  const GoChat = () => {
    navigate("/chat");
  };

  return (
    <S.Layout>
      <S.Header>
        <S.WriteIcon src={Write} onClick={handleGo} />
        <S.Title>김가족 일기</S.Title>
        <S.CloseIcon src={Close} onClick={GoClose} />
      </S.Header>
      <S.MainContainer>
        <S.QuestionNumberContainer>
          <span>질문 #1</span>
          <span>2025.01.01</span>
        </S.QuestionNumberContainer>
        <S.Question>서로를 볼 때 생각나는 동물은 무엇인가요?</S.Question>
        <S.MemberFeelContainer>
          <S.FeelContainer>
            <img src={Happy} />
            <S.Name>김사장</S.Name>
          </S.FeelContainer>
          <S.FeelContainer>
            <img src={Happy} />
            <S.Name>엄마다</S.Name>
          </S.FeelContainer>
          <S.FeelContainer>
            <img src={Blur} />
            <S.Name>ㅅㅇ</S.Name>
          </S.FeelContainer>
          <S.FeelContainer>
            <img src={Happy} />
            <S.Name>띠연</S.Name>
          </S.FeelContainer>
        </S.MemberFeelContainer>
        <S.Answer1>
          <S.Detial>
            <span>김사장</span>
            <span style={{ color: "#8A8A8A" }}>2월 16일 (일) 3:48</span>
          </S.Detial>
          <S.AnswerText1>여보는 사자... 우는 개. 연이는 똥깨.</S.AnswerText1>
        </S.Answer1>
        <S.Answer2>
          <S.Detial>
            <span>엄마다</span>
            <span style={{ color: "#8A8A8A" }}>2월 16일 (일) 8:20</span>
          </S.Detial>
          <S.AnswerText1>여보는 개구리, 우는 개, 연이는 돼지?</S.AnswerText1>
        </S.Answer2>
        <S.Answer2>
          <S.Detial>
            <span>ㅅㅇ</span>
          </S.Detial>
          <S.AnswerText1 style={{ color: "#C2C2C2" }}>
            아직 상대방이 답변하지 않았어요...
          </S.AnswerText1>
        </S.Answer2>
        <S.Answer2>
          <S.Detial>
            <span>띠연</span>
            <span style={{ color: "#8A8A8A" }}>2월 16일 (일) 10:46</span>
          </S.Detial>
          <S.AnswerText1>아빠는 토키, 엄마는 양, 오빠는 타조</S.AnswerText1>
        </S.Answer2>
      </S.MainContainer>
      <S.ChatIcon src={Chat} onClick={GoChat} />
    </S.Layout>
  );
};

export default ShowAnswer;
