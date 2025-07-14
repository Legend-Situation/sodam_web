import * as S from "./style";
import Happy from "@/assets/happy.png";
import WriteSvg from "@/assets/write.svg";
import CloseSvg from "@/assets/close.svg";
import ChatSvg from "@/assets/chat.svg";
import { useNavigate } from "react-router-dom";
import { useAnswersQuery, useMyGroupQuery } from "@/api";
import { formatDateKorean } from "@/utils/format";

const ShowAnswer = () => {
  const { data } = useMyGroupQuery();
  const group = data?.data || [];
  const { data: answers } = useAnswersQuery(group?.groupId);
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
        <S.WriteIcon src={WriteSvg} onClick={handleGo} />
        <S.Title>{group.name}</S.Title>
        <S.CloseIcon src={CloseSvg} onClick={GoClose} />
      </S.Header>
      <S.MainContainer>
        <S.QuestionNumberContainer>
          <span>질문 #{answers?.data.questionId}</span>
          <span>{formatDateKorean(answers?.[0]?.createdAt ?? "")}</span>
        </S.QuestionNumberContainer>
        <S.Question>{answers?.data.question}</S.Question>
        <S.MemberFeelContainer>
          {answers?.data.answers.map((ans: any, idx: number) => (
            <S.FeelContainer key={idx}>
              <img src={Happy} />
              <S.Name>{ans.name}</S.Name>
            </S.FeelContainer>
          ))}
        </S.MemberFeelContainer>
        {answers?.data.answers.map((ans: any, idx: number) => (
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
