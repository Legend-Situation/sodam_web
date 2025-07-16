import * as S from "./style";
import ShellIcon from "@/assets/shell.svg";
import Alerm from "@/assets/alerm.svg";
import SeaOtter1 from "../../assets/seaOtter1.png";
import Heart from "@/assets/heart.svg";
import { useMyGroupQuery, useTodayQuestionQuery, usePointsQuery } from "@/api";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useMyGroupQuery();
  const { data: questions } = useTodayQuestionQuery(data?.data.groupId);
  const { data: points } = usePointsQuery();
  const navigate = useNavigate();

  const handleGoAnswer = () => {
    navigate("/choose-feel");
  };

  const goToShop = () => navigate("/shop");
  const goToTimeCapsule = () => navigate("/timecapsule");
  const goToGrowthTree = () => navigate("/growthtree");

  const members = data?.data.members || [];

  return (
    <S.Layout>
      <S.Header>
        <S.ShellContainer>
          <img src={ShellIcon} />
          <S.Shell>{members.length}</S.Shell>
        </S.ShellContainer>
        <S.IconContainer>
          <S.PointDisplay>💎 {points?.data.balance || 0}</S.PointDisplay>
          <S.Icon src={Alerm} />
          <S.Icon src={ShellIcon} onClick={goToShop} style={{ cursor: "pointer" }} />
        </S.IconContainer>
      </S.Header>
      <S.MainContainer>
        <S.MeetTextCotainer>
          <>만난지</>
          <S.BlueText>
            {data?.data.startedAt
              ? `${
                  Math.floor(
                    (new Date().getTime() -
                      new Date(data.data.startedAt).getTime()) /
                      (1000 * 60 * 60 * 24)
                  ) + 1
                }`
              : ""}
            <span style={{ color: "black" }}>일 째</span>
          </S.BlueText>
        </S.MeetTextCotainer>
        <S.MyGroupNames>
          {members.map((m: any, idx: number) => (
            <>
              <S.Name key={m.userId}>{m.name}</S.Name>
              {idx < members.length - 1 && <S.HeartIcon src={Heart} />}
            </>
          ))}
        </S.MyGroupNames>
        <S.CharacterImg src={SeaOtter1} />
        <S.QuestionContainer onClick={handleGoAnswer}>
          <S.QuestionTitle>
            오늘의 질문 #{questions?.data.question.id}
          </S.QuestionTitle>
          <S.Question>{questions?.data.question.content}</S.Question>
        </S.QuestionContainer>
        
        <S.FeatureGrid>
          <S.NewFeatureButton onClick={goToShop}>
            🛍️ 상점
          </S.NewFeatureButton>
          <S.NewFeatureButton onClick={goToTimeCapsule}>
            💝 타임캡슐
          </S.NewFeatureButton>
          <S.NewFeatureButton onClick={goToGrowthTree}>
            🌱 성장나무
          </S.NewFeatureButton>
          <S.NewFeatureButton onClick={() => navigate("/missions")}>
            🎯 미션
          </S.NewFeatureButton>
        </S.FeatureGrid>
      </S.MainContainer>
      <Footer />
    </S.Layout>
  );
};

export default Home;
