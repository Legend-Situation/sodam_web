import * as S from "./style";
import ShellIcon from "@/assets/shell.svg";
import Alerm from "@/assets/alerm.svg";
import Market from "@/assets/market.svg";
import SeaOtter1 from "../../assets/seaOtter1.png";
import Heart from "@/assets/heart.svg";
import { useMyGroupQuery, useGroupQuestionsQuery } from "@/api";
import Footer from "@/components/Footer";

const Home = () => {
  const { data } = useMyGroupQuery();
  const { data: questions } = useGroupQuestionsQuery(data?.data.groupId || 0);
  const handleGoAnswer = () => {
    // navigate("/choose-feel");
  };
  const members = data?.data.members || [];
  const firstQuestion = questions?.data.questions[0];
    return (
        <S.Layout>
            <S.Header>
                <S.ShellContainer>
                    <img src={ShellIcon} />
                    <S.Shell>{members.length}</S.Shell>
                </S.ShellContainer>
                <S.IconContainer>
                    <S.Icon src={Alerm} />
                    <S.Icon src={Market} />
                </S.IconContainer>
            </S.Header>
            <S.MainContainer>
                <S.MeetTextCotainer>
                    <>만난지</>
                    <S.BlueText>
                        {data?.data.startedAt
                            ? `${
                                  Math.floor(
                                      (new Date().getTime() -
                                          new Date(
                                              data.data.startedAt
                                          ).getTime()) /
                                          (1000 * 60 * 60 * 24)
                                  ) + 1
                              }`
                            : ""}
                        <span style={{ color: "black" }}>일 째</span>
                    </S.BlueText>
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
                <S.CharacterImg src={SeaOtter1} />
                <S.QuestionContainer onClick={handleGoAnswer}>
                    <S.QuestionTitle>
                        오늘의 질문 #{firstQuestion?.id}
                    </S.QuestionTitle>
                    <S.Question>{firstQuestion?.content}</S.Question>
                        </S.QuestionContainer>
      </S.MainContainer>
      <Footer />
    </S.Layout>
  );
};

export default Home;
