import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Note from "../../assets/dartlist.svg";
import HomeIcon from "../../assets/grayhome.svg";
import CalendarIcon from "../../assets/calendar.svg";
import MyPageIcon from "../../assets/mypage.svg";
import CalendarView from "../../assets/calendar.png";

const Calendar = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/home");
  };

  const GoCal = () => {
    navigate("/calendar");
  };

  const GoMyPage = () => {
    navigate("/mypage");
  };

  return (
    <S.Layout>
      <img src={CalendarView} alt="Calendar" />
      <S.Footer>
        <img src={HomeIcon} onClick={GoHome} style={{ cursor: "pointer" }} alt="Home" />
        <img src={CalendarIcon} onClick={GoCal} style={{ cursor: "pointer" }} alt="Calendar" />
        <img src={Note} style={{ cursor: "pointer" }} alt="Note" />
        <img src={MyPageIcon} onClick={GoMyPage} style={{ cursor: "pointer" }} alt="My Page" />
      </S.Footer>
    </S.Layout>
  );
};

export default Calendar;