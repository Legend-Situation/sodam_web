import { useState, useMemo } from "react";
import PrevIcon from "@/assets/prev.svg";
import NextIcon from "@/assets/next.svg";
import * as S from "./style";

interface Event {
  date: string;
}
interface CalendarContainerProps {
  events?: Event[];
  startDate?: string;
}

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const CalendarContainer = ({
  events = [],
  startDate,
}: CalendarContainerProps) => {
  const today = new Date();
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const firstDay = useMemo(() => new Date(view.year, view.month, 1), [view]);
  const lastDate = useMemo(
    () => new Date(view.year, view.month + 1, 0).getDate(),
    [view]
  );

  const blanks = Array(firstDay.getDay()).fill(null);
  const days = Array.from({ length: lastDate }, (_, i) => i + 1);
  const grid = [...blanks, ...days];

  const isToday = (d: number) =>
    view.year === today.getFullYear() &&
    view.month === today.getMonth() &&
    d === today.getDate();

  const hasEvent = (d: number) =>
    events.some(
      (ev) =>
        ev.date ===
        `${view.year}-${String(view.month + 1).padStart(2, "0")}-${String(
          d
        ).padStart(2, "0")}`
    );

  const moveMonth = (offset: number) => {
    let y = view.year,
      m = view.month + offset;
    if (m < 0) {
      y--;
      m = 11;
    }
    if (m > 11) {
      y++;
      m = 0;
    }
    setView({ year: y, month: m });
  };

  const daysCount = startDate
    ? Math.floor(
        (today.getTime() - new Date(startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1
    : null;

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {view.year}년 {String(view.month + 1).padStart(2, "0")}월
        </S.Title>
        <S.IconBtn onClick={() => moveMonth(-1)}>
          <img src={PrevIcon} alt="prev" />
        </S.IconBtn>
        <S.IconBtn onClick={() => moveMonth(1)}>
          <img src={NextIcon} alt="next" />
        </S.IconBtn>
      </S.Header>

      <S.WeekRow>
        {weekDays.map((w, i) => (
          <S.WeekDay key={i} sunday={i === 0} saturday={i === 6}>
            {w}
          </S.WeekDay>
        ))}
      </S.WeekRow>

      <S.DaysGrid>
        {grid.map((d, i) => (
          <S.DayCell key={i} today={d !== null && isToday(d)}>
            {d && <S.DayNumber>{d}</S.DayNumber>}
            {d && hasEvent(d) && <S.Dot />}
          </S.DayCell>
        ))}
      </S.DaysGrid>

      <S.Footer>
        만난지 <S.Count>{daysCount}</S.Count> 일 째
      </S.Footer>
    </S.Container>
  );
};

export default CalendarContainer;
