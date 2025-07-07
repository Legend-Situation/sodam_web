import * as S from "./style";
import Happy from "@/assets/happy.png";
import WriteSvg from "@/assets/write.svg";
import CloseSvg from "@/assets/close.svg";
import ChatSvg from "@/assets/chat.svg";
import { useNavigate } from "react-router-dom";
import { useAnswersQuery } from "@/api";
import { formatDateKorean } from "@/utils/format";

const ShowAnswer = () => {
  const navigate = useNavigate();
  const { data } = useAnswersQuery(1);

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
        <S.WriteIcon src={WriteSvg} onClick={handleGo} />
        <S.Title>김가족 일기</S.Title>
        <S.CloseIcon src={CloseSvg} onClick={GoClose} />
      </S.Header>
      <S.MainContainer>
        <S.QuestionNumberContainer>
          <span>질문 #1</span>
          <span>
            {formatDateKorean(data?.data?.answers?.[0]?.createdAt ?? "")}
          </span>
        </S.QuestionNumberContainer>
        <S.Question>{data?.data?.question}</S.Question>
        <S.MemberFeelContainer>
          {data?.data?.answers?.map((ans: any, idx: number) => (
            <S.FeelContainer key={idx}>
              <img src={Happy} />
              <S.Name>{ans.name}</S.Name>
            </S.FeelContainer>
          ))}
        </S.MemberFeelContainer>
        {data?.data?.answers?.map((ans: any, idx: number) => (
          <S.Answer2 key={idx}>
            <S.Detial>
              <span>{ans.name}</span>
              {ans.createdAt && (
                <span style={{ color: "#8A8A8A" }}>
                  {formatDateKorean(ans.createdAt)}
                </span>
              )}
            </S.Detial>
            <S.AnswerText1>{ans.answer}</S.AnswerText1>
          </S.Answer2>
        ))}
      </S.MainContainer>
      <S.ChatIcon src={ChatSvg} onClick={GoChat} />
    </S.Layout>
  );
};

export default ShowAnswer;
