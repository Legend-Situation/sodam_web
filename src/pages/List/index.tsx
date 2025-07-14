import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useGroupQuestionsQuery, useMyGroupQuery } from "@/api";
import Footer from "@/components/Footer";

const List = () => {
    const navigate = useNavigate();
    const { data: group } = useMyGroupQuery();
    const groupId = group?.data.groupId || 0;
    const { data } = useGroupQuestionsQuery(groupId);

    const GoQuestion = () => {
        navigate("/show-answer");
    };
    const GoHome = () => {
        navigate("/home");
    };
    const GoCal = () => {
        navigate("/calendar");
    };
    const GoMyPage = () => {
        navigate("/my-page");
    };

    const questions = data?.data.questions || [];

    return (
        <S.Layout>
            <S.Header>
                <span>리스트</span>
            </S.Header>
            {questions.map((q: any) => (
                <S.QuestionContainer key={q.id} onClick={GoQuestion}>
                    <S.FirstLine>
                        <S.BlueText>질문 #{q.id}</S.BlueText>
                        <S.Date>{q.date}</S.Date>
                    </S.FirstLine>
                    <S.Question>{q.content}</S.Question>
                </S.QuestionContainer>
            ))}
            <Footer />
        </S.Layout>
    );
};

export default List;
