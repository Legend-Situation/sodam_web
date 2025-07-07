import styled from "styled-components";

export const Container = styled.main`
  width: 360px;
  margin: 0 auto;
  font-family: "SeoulHangangM";
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;

export const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  flex: 1;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const WeekDay = styled.div<{
  sunday: boolean;
  saturday: boolean;
}>`
  text-align: center;
  padding: 8px 0;
  color: ${({ sunday, saturday }: { sunday: boolean; saturday: boolean }) =>
    sunday ? "#F27474" : saturday ? "#84C3EE" : "#6F6F6F"};
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
`;

export const DayCell = styled.div<{
  weekend: boolean;
  saturday: boolean;
  today: boolean;
}>`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ weekend, saturday }: { weekend: boolean; saturday: boolean }) =>
    weekend ? "red" : saturday ? "blue" : "#333"};
  ${({ today }: { today: boolean }) =>
    today &&
    `
    background: #84C3EE;
    color: #fff;
    border-radius: 50%;
    width: 32px; height: 32px;
  `}
`;

export const DayNumber = styled.span`
  line-height: 1;
`;

export const Dot = styled.span`
  position: absolute;
  bottom: 4px;
  width: 6px;
  height: 6px;
  background: #aedfff;
  border-radius: 50%;
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: #555;
`;
export const Count = styled.span`
  color: #aedfff;
  font-weight: bold;
`;
