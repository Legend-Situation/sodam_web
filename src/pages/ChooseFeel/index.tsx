import { useState } from "react";
import * as S from "./style";
import Happy from "@/assets/happy.png";
import Free from "@/assets/free.png";
import Sad from "@/assets/sad.png";
import Angry from "@/assets/angry.png";
import Arrow from "@/assets/arrow.svg";
import Check from "@/assets/check.svg";
import { useNavigate } from "react-router-dom";
import {
  useAnswerQuestionMutation,
  useMyGroupQuery,
  useTodayQuestionQuery,
  useEarnPointMutation,
  useEarnPointMutation,
} from "@/api";

const ChooseFeel = () => {
  const navigate = useNavigate();
  const { data } = useMyGroupQuery();

  const { data: questions } = useTodayQuestionQuery(data?.data.groupId);
  const [selectedFeelId, setSelectedFeelId] = useState(null as number | null);
  const [answer, setAnswer] = useState("");
  const answerQuestion = useAnswerQuestionMutation();
  const earnPoint = useEarnPointMutation();
  const earnPoint = useEarnPointMutation();

  const GoBack = () => {
    navigate("/home");
  };

  const GoAnswer = () => {
    if (answer.trim()) {
      answerQuestion.mutate(
        { groupId: data?.data.groupId, answer, weather: "맑음" },
        {
          onSuccess: () => {
            // 답변 완료시 포인트 지급
            earnPoint.mutate({
              type: "answer",
              amount: 10,
              description: "질문 답변 완료",
            });
            navigate("/show-answer");
          },
        }
      );
    }
  };

  const Feel = [
    { id: 1, feel: "행복해요", icon: Happy },
    { id: 2, feel: "평온해요", icon: Free },
    { id: 3, feel: "슬퍼요", icon: Sad },
    { id: 4, feel: "짜증나요", icon: Angry },
  ];

  return (
    <S.Layout>
      <S.Header>
        <img src={Arrow} alt="뒤로 가기" onClick={GoBack} />
        <S.CheckIcon src={Check} onClick={GoAnswer} />
      </S.Header>
      <S.Center>
        <S.ChooseFeelContainer>
          <S.ChooseTitle>오늘은 어떤 기분이였나요?</S.ChooseTitle>
          <S.Feel>
            {Feel.map((item) => (
              <S.FeelContainer
                key={item.id}
                isSelected={selectedFeelId === item.id}
                onClick={() => setSelectedFeelId(item.id)}
              >
                <img src={item.icon} alt={item.feel} />
                <S.FeelText>{item.feel}</S.FeelText>
              </S.FeelContainer>
            ))}
          </S.Feel>
        </S.ChooseFeelContainer>
        <S.QuestionContainer>
          <S.QuestionNumber>
            질문 #{questions?.data?.question.id}
          </S.QuestionNumber>
          <S.Question>{questions?.data?.question.content}</S.Question>
          <S.Answer
            placeholder="답변을 입력하세요."
            value={answer}
            onChange={(e: any) => setAnswer(e.target.value)}
          />
        </S.QuestionContainer>
      </S.Center>
    </S.Layout>
  );
};

export default ChooseFeel;
