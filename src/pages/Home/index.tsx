import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import * as S from "./style";
import ShellIcon from "@/icons/ShellIcon";
import AlermIcon from "@/icons/AlermIcon";
import MarketIcon from "@/icons/MarketIcon";
import HomeIcon from "@/icons/HomeIcon";
import CalendarIcon from "@/icons/CalendarIcon";
import MypageIcon from "@/icons/MypageIcon";
import SeaOtter1 from "@/assets/seaOtter1.png";
import HeartIcon from "@/icons/HeartIcon";
import NoteIcon from "@/icons/NoteIcon";
import { useNavigate } from "react-router-dom";
import { getMyGroup, getGroupQuestions } from "@/api";

interface Member {
  userId: number;
  name: string;
  profileImg: string;
}

interface GroupInfo {
  groupId: number;
  name: string;
  startedAt: string;
  inviteCode: string;
  members: Member[];
}

interface Question {
  id: number;
  date: string;
  content: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [daysTogether, setDaysTogether] = useState(0);

  const { data: groupRes } = useQuery(['myGroup'], getMyGroup);
  const group = groupRes?.data.data ?? groupRes?.data;

  const { data: questionRes } = useQuery(
    ['groupQuestions', group?.groupId],
    () => getGroupQuestions(group!.groupId),
    {
      enabled: !!group?.groupId,
    },
  );
  const question = questionRes?.data.data.questions?.[0];

  useEffect(() => {
    if (group) {
      const start = new Date(group.startedAt);
      const diff = Math.floor(
        (new Date().getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      setDaysTogether(diff);
    }
  }, [group]);
  const handleGoAnswer = () => {
    navigate("/choose-feel");
  };
  const GoList = () => {
    navigate("/list");
  };
  const GoCal = () => {
    navigate("/calendar");
  };
  const GoMyPage = () => {
    navigate("/my-page");
  };
  return (
    <S.Layout>
      <S.Header>
        <S.ShellContainer>
          <ShellIcon />
          <S.Shell>999</S.Shell>
        </S.ShellContainer>
        <S.IconContainer>
          <S.Icon as={AlermIcon} />
          <S.Icon as={MarketIcon} />
        </S.IconContainer>
      </S.Header>
      <S.MainContainer>
        <S.MeetTextCotainer>
          <>만난지</>
          <S.BlueText>{daysTogether}</S.BlueText>
          <>일째</>
        </S.MeetTextCotainer>
        <S.MyGroupNames>
          {group?.members.map((m, idx) => (
            <>
              <S.Name key={m.userId}>{m.name}</S.Name>
              {idx < group.members.length - 1 && <S.HeartIcon as={HeartIcon} />}
            </>
          ))}
        </S.MyGroupNames>
        <S.CharacterImg src={SeaOtter1} />
        <S.QuestionContainer onClick={handleGoAnswer}>
          <S.QuestionTitle>
            오늘의 질문 {question ? `#${question.id}` : ""}
          </S.QuestionTitle>
          <S.Question>{question?.content ?? ""}</S.Question>
        </S.QuestionContainer>
      </S.MainContainer>
      <S.Footer>
        <HomeIcon style={{ cursor: "pointer" }} />
        <CalendarIcon onClick={GoCal} style={{ cursor: "pointer" }} />
        <NoteIcon onClick={GoList} style={{ cursor: "pointer" }} />
        <MypageIcon onClick={GoMyPage} style={{ cursor: "pointer" }} />
      </S.Footer>
    </S.Layout>
  );
};

export default Home;
