import React, { useState, useEffect } from "react";
import * as S from "./style";
import Send from "../../assets/send.svg";
import Arrow from "../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

interface Comment {
  author: string;
  text: string;
}

const Chat = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedComments = localStorage.getItem("chatComments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      const newComment = { author: "띠연", text: inputValue };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setInputValue("");

      localStorage.setItem("chatComments", JSON.stringify(updatedComments));
    }
  };

  const GoHome = () => {
    navigate("/home");
  };

  return (
    <S.Layout>
      <S.Header>
        <S.Arrow src={Arrow} onClick={GoHome} />
        <span>질문 #12</span>
      </S.Header>
      <S.Question>서로를 볼 때 생각나는 동물은 무엇인가요?</S.Question>
      <S.OtherChatContainer>
        <span>김사장</span>
        <S.Chat>내가 개구리? 너무한거 아니냐.</S.Chat>
      </S.OtherChatContainer>
      <S.OtherChatContainer>
        <span>엄마다</span>
        <S.Chat>ㅋ</S.Chat>
      </S.OtherChatContainer>
      <S.OtherChatContainer>
        <span>엄마다</span>
        <S.Chat>인정해요 그냥.</S.Chat>
      </S.OtherChatContainer>

      {comments.map((comment, index) =>
        comment.author === "띠연" ? (
          <S.MyChatContainer key={index}>
            <span>나</span>
            <S.MyChat>{comment.text}</S.MyChat>
          </S.MyChatContainer>
        ) : (
          <S.OtherChatContainer key={index}>
            <span>{comment.author}</span>
            <S.Chat>{comment.text}</S.Chat>
          </S.OtherChatContainer>
        ),
      )}
      <S.InputContainer>
        <S.Input
          placeholder="댓글달기..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <img
          src={Send}
          width={24}
          height={24}
          onClick={handleSendClick}
          style={{ cursor: "pointer" }}
          alt="Send"
        />
      </S.InputContainer>
    </S.Layout>
  );
};

export default Chat;
