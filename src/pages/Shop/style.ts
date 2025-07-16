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

export const ItemCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const ItemName = styled.h3`
  font-size: 14px;
  margin: 0 0 4px 0;
  text-align: center;
`;

export const ItemDescription = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0 0 8px 0;
  text-align: center;
`;

export const ItemPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #84c3ee;
  margin-bottom: 8px;
`;

export const ItemQuantity = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
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

export const UseButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  width: 100%;
`;