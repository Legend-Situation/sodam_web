import styled from "styled-components";
import Background from "@/assets/background.png";

export const Layout = styled.main`
  background-image: url(${Background});
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "SeoulHangangM";
  padding-bottom: 80px;
`;

export const Header = styled.header`
  padding: 57px 28px 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const PointDisplay = styled.div`
  background: #84c3ee;
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

export const TreeEmoji = styled.div`
  font-size: 120px;
  margin-bottom: 16px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

export const TreeInfo = styled.div`
  text-align: center;
`;

export const TreeLevel = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #84c3ee;
  margin-bottom: 4px;
`;

export const TreeName = styled.div`
  font-size: 16px;
  color: #666;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const ProgressFill = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  background: linear-gradient(90deg, #84c3ee, #a8d5f0);
  transition: width 0.3s ease;
`;

export const ProgressText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #666;
`;

export const Description = styled.p`
  text-align: center;
  color: #666;
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.4;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 20px 0;
`;

export const WaterButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const MilestoneButton = styled.button`
  background: #84c3ee;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

export const StatValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #84c3ee;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  max-height: 70vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
`;

export const MilestoneList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MilestoneItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 8px;
`;

export const MilestoneIcon = styled.div`
  font-size: 24px;
`;

export const MilestoneInfo = styled.div`
  flex: 1;
`;

export const MilestoneTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const MilestoneDate = styled.div`
  font-size: 12px;
  color: #666;
`;