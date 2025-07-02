import { useMutation, useQuery } from '@tanstack/react-query';
import axios from './axios';

type AddQuestionParams = { content: string; date: string };
export const useAddQuestion = () =>
  useMutation((data: AddQuestionParams) =>
    axios.post('/question', data).then(res => res.data)
  );

type AnswerParams = { groupId: number; answer: string; weather: string };
export const useAnswerQuestion = () =>
  useMutation((data: AnswerParams) =>
    axios.post('/question/answer', data).then(res => res.data)
  );

export const useAnswers = (questionId: number) =>
  useQuery(['answers', questionId], () =>
    axios.get(`/question/answer/${questionId}`).then(res => res.data)
  );

export const useAnswersByDate = (groupId: number, date: string) =>
  useQuery(['answers', groupId, date], () =>
    axios.get(`/question/answer/${groupId}/${date}`).then(res => res.data)
  );

export const useGroupQuestions = (groupId: number) =>
  useQuery(['groupQuestions', groupId], () =>
    axios.get(`/question/group/${groupId}/questions`).then(res => res.data)
  );
