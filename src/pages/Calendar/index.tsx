import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";
import Note from "@/assets/graynote.svg";
import HomeIcon from "@/assets/grayhome.svg";
import CalendarIcon from "@/assets/dartkcalendar.svg";
import MyPageIcon from "@/assets/mypage.svg";
import GoToAnswer from "@/assets/goToAnswer.svg";
import {
  useCreateMemoMutation,
  useMonthMemosQuery,
  useMyGroupQuery,
} from "@/api";
import CalendarContainer from "@/components/CalendarContainer";

const Calendar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const createMemo = useCreateMemoMutation();
  const { data: group } = useMyGroupQuery();
  const groupId = group?.data.groupId || 0;
  const startedAt = group?.data.startedAt;
  const today = new Date();
  const month = today.toISOString().slice(0, 7);
  const todayDate = today.toISOString().slice(0, 10);
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const todayLabel = `${today.getMonth() + 1}월 ${today.getDate()}일 ${dayNames[today.getDay()]}요일`;
  const { data: memos } = useMonthMemosQuery(groupId, month);

  const GoHome = () => navigate("/home");
  const GoList = () => navigate("/list");
  const GoMyPage = () => navigate("/my-page");
  const ToggleModal = () => setModalOpen(!isModalOpen);
  const GoShowAnswer = () => {
    if (!groupId) return;
    createMemo.mutate({ groupId, date: todayDate, content });
    navigate("/show-answer");
  };

  const firstMemo = memos?.data.memos[0];

  return (
    <S.Layout>
      <p>캘린더</p>
      <CalendarContainer
        startDate={startedAt}
        events={memos?.data.memos || []}
      />

      <S.EditImg onClick={ToggleModal} style={{ cursor: "pointer" }} />
      <S.Footer>
        <img src={HomeIcon} onClick={GoHome} style={{ cursor: "pointer" }} />
        <img src={CalendarIcon} style={{ cursor: "pointer" }} />
        <img src={Note} onClick={GoList} style={{ cursor: "pointer" }} />
        <img
          src={MyPageIcon}
          onClick={GoMyPage}
          style={{ cursor: "pointer" }}
        />
      </S.Footer>
      <S.Modal isOpen={isModalOpen}>
        <S.TextContainer>
          <h3>{todayLabel}</h3>
          <img
            src={GoToAnswer}
            style={{ cursor: "pointer" }}
            onClick={GoShowAnswer}
          />
        </S.TextContainer>
        <S.Input
          placeholder="일정 내용을 입력하세요..."
          value={content || firstMemo?.content || ""}
          onChange={(e: any) => setContent(e.target.value)}
        />
      </S.Modal>
    </S.Layout>
  );
};

export default Calendar;
