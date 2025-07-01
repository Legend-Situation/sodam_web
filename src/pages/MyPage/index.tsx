import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import * as S from "./style";
import ShellIcon from "@/icons/ShellIcon";
import HeartIcon from "@/icons/HeartIcon";
import CopyIcon from "@/icons/CopyIcon";
import RightIcon from "@/icons/RightIcon";
import { useNavigate } from "react-router-dom";
import NoteIcon from "@/icons/NoteIcon";
import CalendarIcon from "@/icons/CalendarIcon";
import GrayhomeIcon from "@/icons/GrayhomeIcon";
import DartprofileIcon from "@/icons/DartprofileIcon";
import { getMyGroup } from "@/api";

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

const MyPage = () => {
  const navigate = useNavigate();
  const [daysTogether, setDaysTogether] = useState(0);

  const { data: groupRes } = useQuery(['myGroup'], getMyGroup);
  const group = groupRes?.data.data ?? groupRes?.data;

  useEffect(() => {
    if (group) {
      const start = new Date(group.startedAt);
      const diff = Math.floor(
        (new Date().getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      setDaysTogether(diff);
    }
  }, [group]);
  const GoList = () => {
    navigate("/list");
  };
  const GoCal = () => {
    navigate("/calendar");
  };
  const GoMyPage = () => {
    navigate("/my-page");
  };
  const Out = () => {
    navigate("/");
  };
  const GoHome = () => {
    navigate("/home");
  };
  return (
    <S.Layout>
      <S.Header>
        <ShellIcon />
        <S.Shell>999</S.Shell>
      </S.Header>
      <S.TextContainer>
        <span>{group?.name ?? ""}</span>
        <S.MeetTextCotainer>
          <>만난지</>
          <S.BlueText>{daysTogether}</S.BlueText>
          <>일째</>
        </S.MeetTextCotainer>
        <S.MyGroupNames>
          {group?.members.map((member, idx) => (
            <>
              <S.Name key={member.userId}>{member.name}</S.Name>
              {idx < group.members.length - 1 && <S.HeartIcon as={HeartIcon} />}
            </>
          ))}
        </S.MyGroupNames>
      </S.TextContainer>
      <S.Center>
        <S.CopyContainer>
          <S.CopyTitle>나의 코드 복사</S.CopyTitle>
          <S.CodeContainer>
            <S.Code>{group?.inviteCode ?? ""}</S.Code>
            <CopyIcon style={{ cursor: "pointer" }} />
          </S.CodeContainer>
        </S.CopyContainer>
      </S.Center>
      <S.Line />
      <S.SelectList>
        <S.Colum>
          <S.Text>초대 코드 입력하기</S.Text>
          <S.Right as={RightIcon} />
        </S.Colum>
        <S.Colum>
          <S.Text>알림</S.Text>
          <S.Right as={RightIcon} />
        </S.Colum>
        <S.Colum>
          <S.Text>공지사항</S.Text>
          <S.Right as={RightIcon} />
        </S.Colum>
        <S.Colum>
          <S.Text>자주 묻는 질문</S.Text>
          <S.Right as={RightIcon} />
        </S.Colum>
        <S.Colum>
          <S.Text>버전</S.Text>
          <S.Version>24.29.0(242900)</S.Version>
        </S.Colum>
        <S.Colum>
          <S.Text>로그아웃</S.Text>
        </S.Colum>
        <S.Colum>
          <S.Out onClick={Out}>회원탈퇴</S.Out>
        </S.Colum>
      </S.SelectList>
      <S.Footer>
        <GrayhomeIcon onClick={GoHome} style={{ cursor: "pointer" }} />
        <CalendarIcon onClick={GoCal} style={{ cursor: "pointer" }} />
        <NoteIcon onClick={GoList} style={{ cursor: "pointer" }} />
        <DartprofileIcon onClick={GoMyPage} style={{ cursor: "pointer" }} />
      </S.Footer>
    </S.Layout>
  );
};

export default MyPage;
