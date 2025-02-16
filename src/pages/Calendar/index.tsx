import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Note from "../../assets/graynote.svg";
import HomeIcon from "../../assets/grayhome.svg";
import CalendarIcon from "../../assets/dartkcalendar.svg";
import MyPageIcon from "../../assets/mypage.svg";
import CalendarImg from "../../assets/calendarImg.svg";
import Edit from "../../assets/edit.svg";

const Calendar = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/home");
  };

  const GoList = () => {
    navigate("/list");
  };

  const GoMyPage = () => {
    navigate("/my-page");
  };

  return (
    <S.Layout>
      <img src={CalendarImg} alt="Calendar" style={{ margin: "52px" }} />
      <S.EditImg src={Edit} />
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
    </S.Layout>
  );
};

export default Calendar;
