import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import {
  usePointsQuery,
} from "@/api";
import Footer from "@/components/Footer";
import Arrow from "@/assets/arrow.svg";
import ShellIcon from "@/assets/shell.svg";

const Shop = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<"customize" | "premium">("customize");
  const { data: points } = usePointsQuery();

  // 임시 상품 데이터
  const customizeItems = [
    { id: 1, name: "수달 모자", description: "귀여운 빨간 모자", price: 50, image: "🎩", type: "accessory" },
    { id: 2, name: "바다 배경", description: "시원한 바다 테마", price: 100, image: "🌊", type: "background" },
    { id: 3, name: "하트 이모티콘", description: "특별한 하트 표현", price: 30, image: "💖", type: "emoji" },
    { id: 4, name: "수달 선글라스", description: "멋진 선글라스", price: 80, image: "🕶️", type: "accessory" },
    { id: 5, name: "별밤 배경", description: "로맨틱한 별밤", price: 120, image: "🌟", type: "background" },
    { id: 6, name: "생일 모자", description: "생일 한정판", price: 200, image: "🎂", type: "limited" },
  ];

  const premiumFeatures = [
    { id: 1, name: "프리미엄 월간", description: "광고 제거 + 특별 기능", price: 500, period: "월간" },
    { id: 2, name: "프리미엄 연간", description: "광고 제거 + 특별 기능", price: 5000, period: "연간", discount: "20% 할인!" },
  ];

  const handlePurchase = (itemName: string, price: number) => {
    if ((points?.data.balance || 0) >= price) {
      alert(`${itemName}을(를) 구매했습니다!`);
    } else {
      alert("조개가 부족합니다!");
    }
  };

  const GoBack = () => navigate("/home");

  return (
    <S.Layout>
      <S.Header>
        <img src={Arrow} onClick={GoBack} style={{ cursor: "pointer" }} />
        <S.Title>상점</S.Title>
        <S.ShellContainer>
          <img src={ShellIcon} width={20} height={20} />
          <S.Shell>{points?.data.balance || 0}</S.Shell>
        </S.ShellContainer>
      </S.Header>

      <S.TabContainer>
        <S.Tab
          active={selectedTab === "customize"}
          onClick={() => setSelectedTab("customize")}
        >
          커스터마이즈
        </S.Tab>
        <S.Tab
          active={selectedTab === "premium"}
          onClick={() => setSelectedTab("premium")}
        >
          프리미엄
        </S.Tab>
      </S.TabContainer>

      <S.Content>
        {selectedTab === "customize" ? (
          <S.ItemGrid>
            {customizeItems.map((item) => (
              <S.ItemCard key={item.id}>
                <S.ItemEmoji>{item.image}</S.ItemEmoji>
                <S.ItemName>{item.name}</S.ItemName>
                <S.ItemDescription>{item.description}</S.ItemDescription>
                <S.ItemPrice>
                  <img src={ShellIcon} width={16} height={16} /> {item.price}
                </S.ItemPrice>
                {item.type === "limited" && <S.LimitedBadge>한정판</S.LimitedBadge>}
                <S.PurchaseButton
                  onClick={() => handlePurchase(item.name, item.price)}
                >
                  구매하기
                </S.PurchaseButton>
              </S.ItemCard>
            ))}
          </S.ItemGrid>
        ) : (
          <S.PremiumGrid>
            {premiumFeatures.map((item) => (
              <S.PremiumCard key={item.id}>
                <S.PremiumName>{item.name}</S.PremiumName>
                <S.PremiumDescription>{item.description}</S.PremiumDescription>
                <S.PremiumPrice>
                  <img src={ShellIcon} width={20} height={20} /> {item.price}
                </S.PremiumPrice>
                <S.PremiumPeriod>{item.period}</S.PremiumPeriod>
                {item.discount && <S.DiscountBadge>{item.discount}</S.DiscountBadge>}
                <S.PremiumButton
                  onClick={() => handlePurchase(item.name, item.price)}
                >
                  구독하기
                </S.PremiumButton>
              </S.PremiumCard>
            ))}
          </S.PremiumGrid>
        )}
      </S.Content>

      <Footer />
    </S.Layout>
  );
};

export default Shop;