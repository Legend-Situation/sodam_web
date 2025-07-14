import * as S from "./style";
import ShellIcon from "@/assets/shell.svg";
import Heart from "@/assets/heart.svg";
import CopyIcon from "@/assets/copyIcon.svg";
import RightIcon from "@/assets/right.svg";
import { useNavigate } from "react-router-dom";
import { useMyGroupQuery } from "@/api";
import Footer from "@/components/Footer";

const MyPage = () => {
    const navigate = useNavigate();
    const { data } = useMyGroupQuery();

    const GoList = () => navigate("/list");
    const GoCal = () => navigate("/calendar");
    const GoMyPage = () => navigate("/my-page");
    const GoHome = () => navigate("/home");
    const Out = () => navigate("/");

    const members = data?.data.members || [];

    return (
        <S.Layout>
            <S.Header>
                <img src={ShellIcon} />
                <S.Shell>{members.length}</S.Shell>
            </S.Header>
            <S.TextContainer>
                <span>{data?.data.name}</span>
                <S.MeetTextCotainer>
                    <>멤버수</>
                    <S.BlueText>{members.length}</S.BlueText>
                    <>명</>
                </S.MeetTextCotainer>
                <S.MyGroupNames>
                    {members.map((m: any, idx: number) => (
                        <>
                            <S.Name key={m.userId}>{m.name}</S.Name>
                            {idx < members.length - 1 && (
                                <S.HeartIcon src={Heart} />
                            )}
                        </>
                    ))}
                </S.MyGroupNames>
            </S.TextContainer>
            <S.Center>
                <S.CopyContainer>
                    <S.CopyTitle>나의 코드 복사</S.CopyTitle>
                    <S.CodeContainer>
                        <S.Code>{data?.data.inviteCode}</S.Code>
                        <img src={CopyIcon} style={{ cursor: "pointer" }} />
                    </S.CodeContainer>
                </S.CopyContainer>
            </S.Center>
            <S.Line />
            <S.SelectList>
                <S.Colum>
                    <S.Text>초대 코드 입력하기</S.Text>
                    <S.Right src={RightIcon} />
                </S.Colum>
                <S.Colum>
                    <S.Text>알림</S.Text>
                    <S.Right src={RightIcon} />
                </S.Colum>
                <S.Colum>
                    <S.Text>공지사항</S.Text>
                    <S.Right src={RightIcon} />
                </S.Colum>
                <S.Colum>
                    <S.Text>자주 묻는 질문</S.Text>
                    <S.Right src={RightIcon} />
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
            <Footer />
        </S.Layout>
    );
};

export default MyPage;
