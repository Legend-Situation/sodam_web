import * as S from "./style";
import ShellIcon from "../../assets/shell.svg";
import Heart from "../../assets/heart.svg";
import CopyIcon from "../../assets/copyIcon.svg";
import Right from "../../assets/right.svg";
import { useNavigate } from "react-router-dom";
import Note from "../../assets/note.svg";
import CalendarIcon from "../../assets/calendar.svg";
import GrayHome from "../../assets/grayhome.svg";
import DarkProfile from "../../assets/dartprofile.svg";

const MyPage = () => {
  const navigate = useNavigate();
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
        <img src={ShellIcon} />
        <S.Shell>999</S.Shell>
      </S.Header>
      <S.TextContainer>
        <span>김가네</span>
        <S.MeetTextCotainer>
          <>만난지</>
          <S.BlueText>7315</S.BlueText>
          <>일째</>
        </S.MeetTextCotainer>
        <S.MyGroupNames>
          <S.Name>띠연</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>김사장</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>엄마다</S.Name>
          <S.HeartIcon src={Heart} />
          <S.Name>ㅅㅇ</S.Name>
        </S.MyGroupNames>
      </S.TextContainer>
      <S.Center>
        <S.CopyContainer>
          <S.CopyTitle>나의 코드 복사</S.CopyTitle>
          <S.CodeContainer>
            <S.Code>ABCDCDE</S.Code>
            <img src={CopyIcon} style={{ cursor: "pointer" }} />
          </S.CodeContainer>
        </S.CopyContainer>
      </S.Center>
      <S.Line />
      <S.SelectList>
        <S.Colum>
          <S.Text>초대 코드 입력하기</S.Text>
          <S.Right src={Right} />
        </S.Colum>
        <S.Colum>
          <S.Text>알림</S.Text>
          <S.Right src={Right} />
        </S.Colum>
        <S.Colum>
          <S.Text>공지사항</S.Text>
          <S.Right src={Right} />
        </S.Colum>
        <S.Colum>
          <S.Text>자주 묻는 질문</S.Text>
          <S.Right src={Right} />
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
        <img src={GrayHome} onClick={GoHome} style={{ cursor: "pointer" }} />
        <img src={CalendarIcon} onClick={GoCal} style={{ cursor: "pointer" }} />
        <img src={Note} onClick={GoList} style={{ cursor: "pointer" }} />
        <img
          src={DarkProfile}
          onClick={GoMyPage}
          style={{ cursor: "pointer" }}
        />
      </S.Footer>
    </S.Layout>
  );
};

export default MyPage;
