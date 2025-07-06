import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import 'react-calendar/dist/Calendar.css';
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

const Calendar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const createMemo = useCreateMemoMutation();
  const { data: group } = useMyGroupQuery();
  const groupId = group?.data.groupId || 0;
  const month = selectedDate.toISOString().slice(0, 7);
  const { data: memos } = useMonthMemosQuery(groupId, month);

  const GoHome = () => navigate("/home");
  const GoList = () => navigate("/list");
  const GoMyPage = () => navigate("/my-page");
  const openModal = (date: Date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };
  const GoShowAnswer = () => {
    createMemo.mutate({
      groupId,
      date: selectedDate.toISOString().slice(0, 10),
      content,
    });
    navigate("/show-answer");
  };

  const firstMemo = memos?.data.memos.find(
    (m: any) => m.date === selectedDate.toISOString().slice(0, 10)
  );

  useEffect(() => {
    if (firstMemo?.content) {
      setContent(firstMemo.content);
    } else {
      setContent('');
    }
  }, [firstMemo]);

  return (
    <S.Layout>
      <S.StyledCalendar
        onClickDay={(value: Date) => openModal(value)}
        value={selectedDate}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            return memos?.data.memos.some(
              (m: any) => m.date === date.toISOString().slice(0, 10)
            )
              ? 'has-memo'
              : undefined;
          }
          return undefined;
        }}
      />
      <S.EditImg onClick={() => openModal(selectedDate)} style={{ cursor: 'pointer' }} />
      <S.Footer>
        <img src={HomeIcon} onClick={GoHome} style={{ cursor: "pointer" }} />
        <img src={CalendarIcon} style={{ cursor: "pointer" }} />
        <img src={Note} onClick={GoList} style={{ cursor: "pointer" }} />
        <img src={MyPageIcon} onClick={GoMyPage} style={{ cursor: "pointer" }} />
      </S.Footer>
      <S.Modal isOpen={isModalOpen}>
        <S.TextContainer>
          <h3>
            {selectedDate.toLocaleDateString('ko-KR', {
              month: 'long',
              day: 'numeric',
              weekday: 'long',
            })}
          </h3>
          <img
            src={GoToAnswer}
            style={{ cursor: "pointer" }}
            onClick={GoShowAnswer}
          />
        </S.TextContainer>
        <S.Input
          placeholder="일정 내용을 입력하세요..."
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
        />
      </S.Modal>
    </S.Layout>
  );
};

export default Calendar;
