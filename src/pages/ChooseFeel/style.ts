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
  padding: 57px 28px 30px 28px;
  display: flex;
`;

export const CheckIcon = styled.img`
  margin-left: auto;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChooseFeelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
`;
export const ChooseTitle = styled.span`
  font-size: 14px;
`;
export const Feel = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 12px;
`;
export const FeelContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => (props.isSelected ? "#84C3EE" : "#dfdfdf")};
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;
  transition: border 0.3s ease;

  &:hover {
    border-color: #84c3ee;
  }
`;
export const FeelText = styled.span`
  font-size: 12px;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 76%;
  padding: 20px;
  margin-top: 12px;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  gap: 12px;
`;
export const QuestionNumber = styled.span`
  font-size: 16px;
  color: #000;
`;
export const Question = styled.span`
  font-size: 14px;
  color: #000;
`;
export const Answer = styled.textarea`
  width: 90%;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  padding: 12px 16px;
`;
