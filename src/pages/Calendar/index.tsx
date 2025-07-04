import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";
import Note from "@/assets/graynote.svg";
import HomeIcon from "@/assets/grayhome.svg";
import CalendarIcon from "@/assets/dartkcalendar.svg";
import MyPageIcon from "@/assets/mypage.svg";
import CalendarImg from "@/assets/calendarImg.svg";
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
  const createMemo = useCreateMemoMutation();
  const { data: group } = useMyGroupQuery();
  const groupId = group?.data.groupId || 0;
  const today = new Date().toISOString().slice(0, 10);
  const month = today.slice(0, 7);
  const { data: memos } = useMonthMemosQuery(groupId, month);

  const GoHome = () => navigate("/home");
  const GoList = () => navigate("/list");
  const GoMyPage = () => navigate("/my-page");
  const ToggleModal = () => setModalOpen(!isModalOpen);
  const GoShowAnswer = () => {
    createMemo.mutate({ groupId, date: today, content });
    navigate("/show-answer");
  };

  const firstMemo = memos?.data.memos[0];

  return (
    <S.Layout>
      <img
        src={CalendarImg}
        style={{ margin: "52px", cursor: "pointer" }}
        onClick={ToggleModal}
      />
      <S.EditImg onClick={ToggleModal} style={{ cursor: "pointer" }} />
      <S.Footer>
        <img src={HomeIcon} onClick={GoHome} style={{ cursor: "pointer" }} />
        <img src={CalendarIcon} style={{ cursor: "pointer" }} />
        <img src={Note} onClick={GoList} style={{ cursor: "pointer" }} />
        <img src={MyPageIcon} onClick={GoMyPage} style={{ cursor: "pointer" }} />
      </S.Footer>
      <S.Modal isOpen={isModalOpen}>
        <S.TextContainer>
          <h3>2월 16일 금요일</h3>
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
