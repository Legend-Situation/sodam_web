import { useNavigate } from "react-router-dom";
import Otter1 from "../../assets/Otter1";
import * as S from "./style";
import Heart from "../../assets/heart.svg";
import { useEffect, useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [diamonds, setDiamonds] = useState(250);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedDiamonds = localStorage.getItem("diamonds");

    if (storedName) {
      setUserName(storedName);
    }

    if (storedDiamonds) {
      setDiamonds(parseInt(storedDiamonds, 10));
    } else {
      localStorage.setItem("diamonds", diamonds.toString());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diamonds", diamonds.toString());
  }, [diamonds]);

  const handleQuestionClick = () => {
    navigate("/question-detail");
  };

  const handleListClick = () => {
    navigate("/list");
  };

  return (
    <S.Layout>
      <S.Header>
        <S.HighContainer>
          <S.Diamond>💎 {diamonds}</S.Diamond>
          <S.FamilyInfo onClick={handleListClick}>
            <div>시연 🩷 윤서 🩷 민지 🩷 {userName} 가족</div>
            <div>
              가족이 된 지 <S.Days>2800</S.Days>일째
            </div>
          </S.FamilyInfo>
        </S.HighContainer>
      </S.Header>
      <S.Content>
        <S.ImgContainer>
          <S.HeartImage src={Heart} alt="Heart" />
        </S.ImgContainer>
        <S.AnimatedOtterContainer>
          <Otter1 width={117} />
        </S.AnimatedOtterContainer>
        <S.QuestionContainer onClick={handleQuestionClick}>
          <S.Question>서로의 첫 만남은 어땠나요?</S.Question>
        </S.QuestionContainer>
      </S.Content>
    </S.Layout>
  );
};

export default Main;
