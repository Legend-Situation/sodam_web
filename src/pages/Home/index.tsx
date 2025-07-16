import * as S from "./style";
import ShellIcon from "@/assets/shell.svg";
import MarketIcon from "@/assets/market.svg";
import Alerm from "@/assets/alerm.svg";
import Heart from "@/assets/heart.svg";
import { 
  useMyGroupQuery, 
  useTodayQuestionQuery, 
  usePointsQuery,
  useGrowthTreeQuery,
  useWaterTreeMutation 
} from "@/api";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useMyGroupQuery();
  const { data: questions } = useTodayQuestionQuery(data?.data.groupId);
  const { data: points } = usePointsQuery();
  const { data: tree } = useGrowthTreeQuery(data?.data.groupId || 0);
  const waterTree = useWaterTreeMutation();
  const navigate = useNavigate();

  const handleGoAnswer = () => {
    navigate("/choose-feel");
  };

  const goToShop = () => navigate("/shop");
  const goToNotifications = () => navigate("/notifications");

  const handleWaterOtter = () => {
    const waterCost = 10;
    if ((points?.data.balance || 0) >= waterCost) {
      waterTree.mutate({ groupId: data?.data.groupId || 0, points: waterCost });
    } else {
      alert("조개가 부족합니다! (필요: 10개)");
    }
  };

  const getOtterStage = (level: number) => {
    if (level < 5) return "/src/assets/seaOtter1.png"; // 아기 수달
    if (level < 15) return "/src/assets/seaOtter2.png"; // 어린 수달
    if (level < 30) return "/src/assets/seaOtter3.png"; // 성장한 수달
    if (level < 50) return "/src/assets/seaOtter4.png"; // 성숙한 수달
    return "/src/assets/seaOtter5.png"; // 완전체 수달
  };

  const getOtterName = (level: number) => {
    if (level < 5) return "아기 수달";
    if (level < 15) return "어린 수달";
    if (level < 30) return "성장한 수달";
    if (level < 50) return "성숙한 수달";
    return "완전체 수달";
  };

  const members = data?.data.members || [];

  return (
    <S.Layout>
      <S.Header>
        <S.ShellContainer>
          <img src={ShellIcon} />
          <S.Shell>{points?.data.balance || 0}</S.Shell>
        </S.ShellContainer>
        <S.IconContainer>
          <S.Icon src={Alerm} onClick={goToNotifications} style={{ cursor: "pointer" }} />
          <S.Icon src={MarketIcon} onClick={goToShop} style={{ cursor: "pointer" }} />
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
        
        <S.OtterContainer>
          <S.CharacterImg src={getOtterStage(tree?.data.level || 0)} />
          <S.OtterInfo>
            <S.OtterLevel>Lv. {tree?.data.level || 0}</S.OtterLevel>
            <S.OtterName>{getOtterName(tree?.data.level || 0)}</S.OtterName>
          </S.OtterInfo>
          <S.ProgressContainer>
            <S.ProgressBar>
              <S.ProgressFill
                width={((tree?.data.experience || 0) / (tree?.data.nextLevelExp || 100)) * 100}
              />
            </S.ProgressBar>
            <S.ProgressText>
              {tree?.data.experience || 0} / {tree?.data.nextLevelExp || 100} EXP
            </S.ProgressText>
          </S.ProgressContainer>
          <S.WaterButton onClick={handleWaterOtter}>
            🌊 물주기 (10개)
          </S.WaterButton>
        </S.OtterContainer>
        
        <S.QuestionContainer onClick={handleGoAnswer}>
          <S.QuestionTitle>
            오늘의 질문 #{questions?.data.question.id}
          </S.QuestionTitle>
          <S.Question>{questions?.data.question.content}</S.Question>
        </S.QuestionContainer>
      </S.MainContainer>
      <Footer />
    </S.Layout>
  );
};

export default Home;