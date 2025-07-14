import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 20px;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #333;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }

  span {
    margin-top: 2px;
  }
`;
