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

export const ShellContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Shell = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const TabContainer = styled.div`
  display: flex;
  margin: 0 28px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px;
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ active }) => (active ? "#84c3ee" : "#999")};
  border-bottom: ${({ active }) => (active ? "2px solid #84c3ee" : "none")};
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px 28px;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const PremiumGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PremiumCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #84c3ee;
`;

export const ItemEmoji = styled.div`
  font-size: 48px;
  margin-bottom: 8px;
`;

export const ItemName = styled.h3`
  font-size: 14px;
  margin: 0 0 4px 0;
  text-align: center;
`;

export const PremiumName = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  text-align: center;
  color: #84c3ee;
`;

export const ItemDescription = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0 0 8px 0;
  text-align: center;
`;

export const PremiumDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  text-align: center;
`;

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #84c3ee;
  margin-bottom: 8px;
`;

export const PremiumPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #84c3ee;
  margin-bottom: 8px;
`;

export const PremiumPeriod = styled.div`
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-bottom: 12px;
`;

export const LimitedBadge = styled.div`
  background: #ff6b6b;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  margin-bottom: 8px;
`;

export const DiscountBadge = styled.div`
  background: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 12px;
  text-align: center;
`;

export const PurchaseButton = styled.button`
  background: #84c3ee;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  width: 100%;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const PremiumButton = styled.button`
  background: linear-gradient(135deg, #84c3ee, #a8d5f0);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(132, 195, 238, 0.4);
  }
`;