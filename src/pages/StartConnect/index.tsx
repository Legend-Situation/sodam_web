import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Variant from "@/assets/variant.svg";
import SeaOtter5 from "../../assets/seaOtter5.png";

const StartConnect = () => {
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    navigate("/create-group");
  };

  const handleJoinGroup = () => {
    navigate("/register-group");
  };

  const handleNavigateToNamed = () => {
    navigate("/named");
  };

  return (
    <S.Layout>
      <S.Header>
        <img src={Variant} onClick={handleNavigateToNamed} />
      </S.Header>
      <S.TitleContainer>
        <span>소중한 사람들과</span>
        <span>함께 소담을 시작해보세요.</span>
      </S.TitleContainer>
      <S.ImgContainer>
        <S.ChrImg src={SeaOtter5} />
      </S.ImgContainer>
      <S.SendConnectContainer>
        <S.SendBtn onClick={handleCreateGroup}>그룹 생성하기</S.SendBtn>
        <S.OrContainer>
          <S.Line />
          <S.Or>또는</S.Or>
          <S.Line />
        </S.OrContainer>
        <S.ConnectBtn onClick={handleJoinGroup}>참가하기</S.ConnectBtn>
      </S.SendConnectContainer>
    </S.Layout>
  );
};

export default StartConnect;