import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import {
  useShopItemsQuery,
  useInventoryQuery,
  usePurchaseItemMutation,
  usePointsQuery,
} from "@/api";
import Footer from "@/components/Footer";
import Arrow from "@/assets/arrow.svg";

const Shop = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<"shop" | "inventory">("shop");
  const { data: shopItems } = useShopItemsQuery();
  const { data: inventory } = useInventoryQuery();
  const { data: points } = usePointsQuery();
  const purchaseItem = usePurchaseItemMutation();

  const handlePurchase = (itemId: number, price: number) => {
    if ((points?.data.balance || 0) >= price) {
      purchaseItem.mutate({ itemId, quantity: 1 });
    } else {
      alert("포인트가 부족합니다!");
    }
  };

  const GoBack = () => navigate("/home");

  return (
    <S.Layout>
      <S.Header>
        <img src={Arrow} onClick={GoBack} style={{ cursor: "pointer" }} />
        <S.Title>상점</S.Title>
        <S.PointDisplay>
          💎 {points?.data.balance || 0}
        </S.PointDisplay>
      </S.Header>

      <S.TabContainer>
        <S.Tab
          active={selectedTab === "shop"}
          onClick={() => setSelectedTab("shop")}
        >
          상점
        </S.Tab>
        <S.Tab
          active={selectedTab === "inventory"}
          onClick={() => setSelectedTab("inventory")}
        >
          보관함
        </S.Tab>
      </S.TabContainer>

      <S.Content>
        {selectedTab === "shop" ? (
          <S.ItemGrid>
            {shopItems?.data.items?.map((item: any) => (
              <S.ItemCard key={item.id}>
                <S.ItemImage src={item.image || "/placeholder-item.png"} />
                <S.ItemName>{item.name}</S.ItemName>
                <S.ItemDescription>{item.description}</S.ItemDescription>
                <S.ItemPrice>💎 {item.price}</S.ItemPrice>
                <S.PurchaseButton
                  onClick={() => handlePurchase(item.id, item.price)}
                  disabled={purchaseItem.isPending}
                >
                  {purchaseItem.isPending ? "구매중..." : "구매하기"}
                </S.PurchaseButton>
              </S.ItemCard>
            ))}
          </S.ItemGrid>
        ) : (
          <S.ItemGrid>
            {inventory?.data.items?.map((item: any) => (
              <S.ItemCard key={item.id}>
                <S.ItemImage src={item.image || "/placeholder-item.png"} />
                <S.ItemName>{item.name}</S.ItemName>
                <S.ItemQuantity>보유: {item.quantity}개</S.ItemQuantity>
                <S.UseButton>사용하기</S.UseButton>
              </S.ItemCard>
            ))}
          </S.ItemGrid>
        )}
      </S.Content>

      <Footer />
    </S.Layout>
  );
};

export default Shop;