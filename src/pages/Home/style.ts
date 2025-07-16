import styled from "styled-components";
import Background from "../../assets/background.png";

export const Layout = styled.main`
    background-image: url(${Background});
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "SeoulHangangM";
`;
export const Header = styled.header`
    padding: 57px 28px 10px 28px;
    display: flex;
`;
export const ShellContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const Shell = styled.span`
    font-size: 16px;
`;
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
`;
export const Icon = styled.img`
    width: 24px;
`;
export const PointDisplay = styled.div`
    background: #84c3ee;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
`;
export const MainContainer = styled.div`
    padding: 70px 28px 120px 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const MeetTextCotainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
`;
export const BlueText = styled.span`
    padding-left: 10px;
    color: #84c3ee;
    font-size: 20px;
`;
export const Name = styled.span`
    font-size: 16px;
`;
export const HeartIcon = styled.img`
    width: 16px;
    height: 16px;
    padding: 0 8px;
`;
export const MyGroupNames = styled.div`
    padding: 10px 0 100px 0;
    display: flex;
    align-items: center;
`;
export const CharacterImg = styled.img`
    padding-top: 10px;
    width: 110px;
    padding-bottom: 50px;
`;
export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #84c3ee;
    padding: 16px 36px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(132, 195, 238, 0.3);
    }
`;
export const QuestionTitle = styled.span`
    font-size: 14px;
    color: #5c5c5c;
`;
export const Question = styled.div`
    padding-top: 5px;
    font-size: 14px;
    color: #5c5c5c;
`;

export const NewFeatureButton = styled.button`
    background: linear-gradient(135deg, #84c3ee, #a8d5f0);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin: 8px;
    box-shadow: 0 2px 8px rgba(132, 195, 238, 0.3);
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(132, 195, 238, 0.4);
    }
`;

export const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
`;