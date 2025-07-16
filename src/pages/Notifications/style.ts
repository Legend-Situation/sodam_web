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

export const Content = styled.div`
  flex: 1;
  padding: 0 28px;
`;

export const NotificationCard = styled.div<{ isRead: boolean }>`
  background: ${({ isRead }) => isRead ? "rgba(255, 255, 255, 0.7)" : "white"};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  border-left: ${({ isRead }) => isRead ? "none" : "4px solid #84c3ee"};
`;

export const NotificationIcon = styled.div`
  font-size: 24px;
  margin-top: 4px;
`;

export const NotificationContent = styled.div`
  flex: 1;
`;

export const NotificationTitle = styled.h3<{ isRead: boolean }>`
  font-size: 14px;
  margin: 0 0 4px 0;
  font-weight: ${({ isRead }) => isRead ? "normal" : "bold"};
  color: ${({ isRead }) => isRead ? "#666" : "#333"};
`;

export const NotificationMessage = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0 0 4px 0;
  line-height: 1.4;
`;

export const NotificationTime = styled.span`
  font-size: 10px;
  color: #999;
`;

export const UnreadDot = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 8px;
  height: 8px;
  background: #84c3ee;
  border-radius: 50%;
`;