import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";
import Note from "@/components/Icons/Graynote";
import HomeIcon from "@/components/Icons/Grayhome";
import CalendarIcon from "@/components/Icons/Dartkcalendar";
import MyPageIcon from "@/components/Icons/Mypage";
import CalendarImg from "@/components/Icons/CalendarImg";
import Edit from "@/components/Icons/Edit";
import GoToAnswer from "@/components/Icons/GoToAnswer";

const Calendar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const GoHome = () => navigate("/home");
  const GoList = () => navigate("/list");
  const GoMyPage = () => navigate("/my-page");
  const ToggleModal = () => setModalOpen(!isModalOpen);
  const GoShowAnswer = () => navigate("/show-answer");

  return (
    <S.Layout>
      <CalendarImg
        style={{ margin: "52px", cursor: "pointer" }}
        onClick={ToggleModal}
      />
      <S.EditImg onClick={ToggleModal} style={{ cursor: "pointer" }} />
      <S.Footer>
        <HomeIcon onClick={GoHome} style={{ cursor: "pointer" }} />
        <CalendarIcon style={{ cursor: "pointer" }} />
        <Note onClick={GoList} style={{ cursor: "pointer" }} />
        <MyPageIcon onClick={GoMyPage} style={{ cursor: "pointer" }} />
      </S.Footer>
      <S.Modal isOpen={isModalOpen}>
        <S.TextContainer>
          <h3>2월 16일 금요일</h3>
          <GoToAnswer
            style={{ cursor: "pointer" }}
            onClick={GoShowAnswer}
          />
        </S.TextContainer>

        <S.Input placeholder="일정 내용을 입력하세요..." />
      </S.Modal>
    </S.Layout>
  );
};

export default Calendar;
