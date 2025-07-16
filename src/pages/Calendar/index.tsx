import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as S from "./style";
import GoToAnswer from "@/assets/goToAnswer.svg";
import {
    useCreateMemoMutation,
    useMemoByDateQuery,
    useUpdateMemoMutation,
    useMonthMemosQuery,
    useMyGroupQuery,
} from "@/api";
import CalendarContainer from "@/components/CalendarContainer";
import Footer from "@/components/Footer";

const Calendar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [content, setContent] = useState("");
    const createMemo = useCreateMemoMutation();
    const updateMemo = useUpdateMemoMutation();
    const { data: group } = useMyGroupQuery();
    const groupId = group?.data.groupId || 0;
    const startedAt = group?.data.startedAt;
    const today = new Date();
    const month = today.toISOString().slice(0, 7);
    const currentDate = selectedDate || today.toISOString().slice(0, 10);
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    
    const selectedDateObj = new Date(currentDate);
    const dateLabel = `${selectedDateObj.getMonth() + 1}월 ${selectedDateObj.getDate()}일 ${
        dayNames[selectedDateObj.getDay()]
    }요일`;
    
    const { data: memos } = useMonthMemosQuery(groupId, month);
    const { data: selectedMemo } = useMemoByDateQuery(groupId, currentDate);

    useEffect(() => {
        if (selectedMemo?.data) {
            setContent(selectedMemo.data.content || "");
        } else {
            setContent("");
        }
    }, [selectedMemo]);

    const GoHome = () => navigate("/home");
    const GoList = () => navigate("/list");
    const GoMyPage = () => navigate("/my-page");
    
    const handleDateClick = (date: string) => {
        setSelectedDate(date);
        setModalOpen(true);
    };
    
    const ToggleModal = (date?: string) => {
        if (date) {
            setSelectedDate(date);
        }
        setModalOpen(!isModalOpen);
    };
    
    const GoShowAnswer = () => {
        if (!groupId) return;
        
        if (selectedMemo?.data) {
            // 기존 메모 업데이트
            updateMemo.mutate({ id: selectedMemo.data.id, content });
        } else {
            // 새 메모 생성
            createMemo.mutate({ groupId, date: currentDate, content });
        }
        setModalOpen(false);
        navigate("/show-answer");
    };

    return (
        <S.Layout>
            <p>캘린더</p>
            <CalendarContainer
                startDate={startedAt}
                events={memos?.data.memos || []}
                onDateClick={handleDateClick}
            />

            <S.EditImg onClick={() => ToggleModal()} style={{ cursor: "pointer" }} />
            <Footer />
            <S.Modal isOpen={isModalOpen}>
                <S.TextContainer>
                    <h3>{dateLabel}</h3>
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
                <S.SaveButton onClick={() => {
                    if (!groupId) return;
                    
                    if (selectedMemo?.data) {
                        updateMemo.mutate({ id: selectedMemo.data.id, content });
                    } else {
                        createMemo.mutate({ groupId, date: currentDate, content });
                    }
                    setModalOpen(false);
                }}>
                    저장하기
                </S.SaveButton>
            </S.Modal>
        </S.Layout>
    );
};

export default Calendar;
