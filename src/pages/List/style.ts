import styled from "styled-components";
import Background from "../../assets/background.png";

export const Layout = styled.main`
    background-image: url(${Background});
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "SeoulHangangM";
    position: relative;
`;
export const Header = styled.header`
    padding: 57px 28px 30px 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #84c3ee;
    width: 80%;
    border-radius: 8px;
`;
export const FirstLine = styled.div`
    display: flex;
`;
export const BlueText = styled.div`
    font-size: 14px;
`;
export const Date = styled.div`
    font-size: 12px;
    color: #6f6f6f;
`;
export const Question = styled.div`
    font-size: 14px;
    color: #5c5c5c;
`;
