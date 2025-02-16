import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";
import Note from "../../assets/graynote.svg";
import HomeIcon from "../../assets/grayhome.svg";
import CalendarIcon from "../../assets/dartkcalendar.svg";
import MyPageIcon from "../../assets/mypage.svg";
import CalendarImg from "../../assets/calendarImg.svg";
import Edit from "../../assets/edit.svg";
import goToAnswer from "../../assets/goToAnswer.svg";

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
      <img
        src={CalendarImg}
        alt="Calendar"
        style={{ margin: "52px", cursor: "pointer" }}
        onClick={ToggleModal}
      />
      <S.EditImg
        src={Edit}
        onClick={ToggleModal}
        style={{ cursor: "pointer" }}
      />
      <S.Footer>
        <img
          src={HomeIcon}
          onClick={GoHome}
          style={{ cursor: "pointer" }}
          alt="Home"
        />
        <img src={CalendarIcon} style={{ cursor: "pointer" }} alt="Calendar" />
        <img
          src={Note}
          onClick={GoList}
          style={{ cursor: "pointer" }}
          alt="Note"
        />
        <img
          src={MyPageIcon}
          onClick={GoMyPage}
          style={{ cursor: "pointer" }}
          alt="My Page"
        />
      </S.Footer>
      <S.Modal isOpen={isModalOpen}>
        <S.TextContainer>
          <h3>2월 16일 금요일</h3>
          <img
            src={goToAnswer}
            alt="Go to Answer"
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
