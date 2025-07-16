import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Arrow from "@/assets/arrow.svg";
import Footer from "@/components/Footer";

const Notifications = () => {
  const navigate = useNavigate();

  // 임시 알림 데이터
  const notifications = [
    {
      id: 1,
      type: "question",
      title: "새로운 질문이 도착했어요!",
      message: "오늘의 질문에 답변해보세요",
      time: "방금 전",
      isRead: false,
    },
    {
      id: 2,
      type: "answer",
      title: "김사장님이 답변했어요",
      message: "질문 #12에 새로운 답변이 있습니다",
      time: "1시간 전",
      isRead: false,
    },
    {
      id: 3,
      type: "level",
      title: "수달이 레벨업했어요! 🎉",
      message: "Lv.3 어린 수달로 성장했습니다",
      time: "2시간 전",
      isRead: true,
    },
    {
      id: 4,
      type: "shop",
      title: "새로운 아이템이 출시되었어요",
      message: "생일 한정판 아이템을 확인해보세요",
      time: "1일 전",
      isRead: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "question": return "❓";
      case "answer": return "💬";
      case "level": return "🌟";
      case "shop": return "🛍️";
      default: return "📢";
    }
  };

  const GoBack = () => navigate("/home");

  return (
    <S.Layout>
      <S.Header>
        <img src={Arrow} onClick={GoBack} style={{ cursor: "pointer" }} />
        <S.Title>알림</S.Title>
        <div style={{ width: 24 }} /> {/* 균형을 위한 빈 공간 */}
      </S.Header>

      <S.Content>
        {notifications.map((notification) => (
          <S.NotificationCard key={notification.id} isRead={notification.isRead}>
            <S.NotificationIcon>
              {getNotificationIcon(notification.type)}
            </S.NotificationIcon>
            <S.NotificationContent>
              <S.NotificationTitle isRead={notification.isRead}>
                {notification.title}
              </S.NotificationTitle>
              <S.NotificationMessage>
                {notification.message}
              </S.NotificationMessage>
              <S.NotificationTime>
                {notification.time}
              </S.NotificationTime>
            </S.NotificationContent>
            {!notification.isRead && <S.UnreadDot />}
          </S.NotificationCard>
        ))}
      </S.Content>

      <Footer />
    </S.Layout>
  );
};

export default Notifications;