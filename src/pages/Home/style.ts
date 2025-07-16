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
    width: 110px;
    height: 110px;
    object-fit: contain;
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

export const OtterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(132, 195, 238, 0.2);
`;

export const OtterInfo = styled.div`
    text-align: center;
    margin: 8px 0;
`;

export const OtterLevel = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #84c3ee;
    margin-bottom: 4px;
`;

export const OtterName = styled.div`
    font-size: 14px;
    color: #666;
`;

export const ProgressContainer = styled.div`
    width: 200px;
    margin: 12px 0;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 4px;
`;

export const ProgressFill = styled.div<{ width: number }>`
    width: ${({ width }) => width}%;
    height: 100%;
    background: linear-gradient(90deg, #84c3ee, #a8d5f0);
    transition: width 0.3s ease;
`;

export const ProgressText = styled.div`
    text-align: center;
    font-size: 12px;
    color: #666;
`;

export const WaterButton = styled.button`
    background: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    margin-top: 8px;
    
    &:hover {
        background: #45a049;
    }
    
    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;