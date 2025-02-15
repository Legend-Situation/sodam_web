import { useState } from "react";
import * as S from "./style";
import Happy from "../../assets/happy.png";
import Free from "../../assets/free.png";
import Sad from "../../assets/sad.png";
import Angry from "../../assets/angry.png";
import Arrow from "../../assets/arrow.svg";
import Check from "../../assets/check.svg";

const ChooseFeel = () => {
  const [selectedFeelId, setSelectedFeelId] = useState<number | null>(null);

  const Feel = [
    { id: 1, feel: "행복해요", icon: Happy },
    { id: 2, feel: "평온해요", icon: Free },
    { id: 3, feel: "슬퍼요", icon: Sad },
    { id: 4, feel: "짜증나요", icon: Angry },
  ];

  return (
    <S.Layout>
      <S.Header>
        <img src={Arrow} alt="뒤로 가기" />
        <S.CheckIcon src={Check} alt="확인" />
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
          <S.QuestionNumber>질문 #12</S.QuestionNumber>
          <S.Question>서로를 볼 때 생각나는 동물은 무엇인가요?</S.Question>
          <S.Answer placeholder="답변을 입력하세요." />
        </S.QuestionContainer>
      </S.Center>
    </S.Layout>
  );
};

export default ChooseFeel;