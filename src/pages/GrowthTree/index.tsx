import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import {
  useGrowthTreeQuery,
  useWaterTreeMutation,
  useTreeMilestonesQuery,
  useMyGroupQuery,
  usePointsQuery,
} from "@/api";
import Footer from "@/components/Footer";
import Arrow from "@/assets/arrow.svg";

const GrowthTree = () => {
  const navigate = useNavigate();
  const [showMilestones, setShowMilestones] = useState(false);

  const { data: group } = useMyGroupQuery();
  const groupId = group?.data.groupId || 0;
  const { data: tree } = useGrowthTreeQuery(groupId);
  const { data: milestones } = useTreeMilestonesQuery(groupId);
  const { data: points } = usePointsQuery();
  const waterTree = useWaterTreeMutation();

  const handleWaterTree = () => {
    const waterCost = 10;
    if ((points?.data.balance || 0) >= waterCost) {
      waterTree.mutate({ groupId, points: waterCost });
    } else {
      alert("포인트가 부족합니다! (필요: 10포인트)");
    }
  };

  const getTreeStage = (level: number) => {
    if (level < 10) return "🌱"; // 새싹
    if (level < 25) return "🌿"; // 어린 나무
    if (level < 50) return "🌳"; // 성장한 나무
    if (level < 75) return "🌲"; // 큰 나무
    return "🌺"; // 꽃이 핀 나무
  };

  const getTreeName = (level: number) => {
    if (level < 10) return "새싹 단계";
    if (level < 25) return "성장 단계";
    if (level < 50) return "번영 단계";
    if (level < 75) return "성숙 단계";
    return "완성 단계";
  };

  const GoBack = () => navigate("/home");

  return (
    <S.Layout>
      <S.Header>
        <img src={Arrow} onClick={GoBack} style={{ cursor: "pointer" }} />
        <S.Title>관계 성장 나무</S.Title>
        <S.PointDisplay>💎 {points?.data.balance || 0}</S.PointDisplay>
      </S.Header>

      <S.Content>
        <S.TreeContainer>
          <S.TreeEmoji>{getTreeStage(tree?.data.level || 0)}</S.TreeEmoji>
          <S.TreeInfo>
            <S.TreeLevel>Lv. {tree?.data.level || 0}</S.TreeLevel>
            <S.TreeName>{getTreeName(tree?.data.level || 0)}</S.TreeName>
          </S.TreeInfo>
        </S.TreeContainer>

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

        <S.Description>
          매일 질문에 답하고 소통할수록 나무가 자라요! 🌱
          <br />
          포인트로 물을 주면 더 빨리 성장해요!
        </S.Description>

        <S.ActionContainer>
          <S.WaterButton onClick={handleWaterTree} disabled={waterTree.isPending}>
            {waterTree.isPending ? "물주는 중..." : "물주기 (10포인트)"}
          </S.WaterButton>
          <S.MilestoneButton onClick={() => setShowMilestones(true)}>
            성장 기록 보기
          </S.MilestoneButton>
        </S.ActionContainer>

        <S.StatsContainer>
          <S.StatItem>
            <S.StatLabel>총 소통 횟수</S.StatLabel>
            <S.StatValue>{tree?.data.totalInteractions || 0}회</S.StatValue>
          </S.StatItem>
          <S.StatItem>
            <S.StatLabel>연속 소통 일수</S.StatLabel>
            <S.StatValue>{tree?.data.streakDays || 0}일</S.StatValue>
          </S.StatItem>
        </S.StatsContainer>
      </S.Content>

      {showMilestones && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalTitle>성장 기록</S.ModalTitle>
              <S.CloseButton onClick={() => setShowMilestones(false)}>×</S.CloseButton>
            </S.ModalHeader>
            <S.MilestoneList>
              {milestones?.data.milestones?.map((milestone: any) => (
                <S.MilestoneItem key={milestone.id}>
                  <S.MilestoneIcon>{milestone.icon}</S.MilestoneIcon>
                  <S.MilestoneInfo>
                    <S.MilestoneTitle>{milestone.title}</S.MilestoneTitle>
                    <S.MilestoneDate>
                      {new Date(milestone.achievedAt).toLocaleDateString()}
                    </S.MilestoneDate>
                  </S.MilestoneInfo>
                </S.MilestoneItem>
              ))}
            </S.MilestoneList>
          </S.ModalContent>
        </S.Modal>
      )}

      <Footer />
    </S.Layout>
  );
};

export default GrowthTree;