import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "./axios";
import QUERY_KEY from "@/constants/queryKey";

type AddQuestionParams = { content: string; date: string };
export const useAddQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AddQuestionParams) =>
      axios.post("/question", data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.question.GROUP_QUESTIONS],
      });
    },
  });
};

type AnswerParams = { groupId: number; answer: string; weather: string };
export const useAnswerQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AnswerParams) =>
      axios.post("/question/answer", data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.question.ANSWERS] });
    },
    onError: () => {
      alert("이미 작성했습니다.");
    },
  });
};

export const useAnswersQuery = (groupId: number) =>
  useQuery({
    queryKey: [QUERY_KEY.question.ANSWERS, groupId],
    queryFn: () =>
      axios.get(`/question/answer/${groupId}`).then((res: any) => res.data),
  });

export const useAnswersByDateQuery = (groupId: number, date: string) =>
  useQuery({
    queryKey: [QUERY_KEY.question.BY_DATE, groupId, date],
    queryFn: () =>
      axios
        .get(`/question/answer/${groupId}/${date}`)
        .then((res: any) => res.data),
  });

export const useGroupQuestionsQuery = (groupId: number) =>
  useQuery({
    queryKey: [QUERY_KEY.question.GROUP_QUESTIONS, groupId],
    queryFn: () =>
      axios
        .get(`/question/group/${groupId}/questions`)
        .then((res: any) => res.data),
    enabled: !!groupId,
  });

export const useTodayQuestionQuery = (groupId: number) =>
  useQuery({
    queryKey: [QUERY_KEY.question.TODAY_QUESTIONS, groupId],
    queryFn: () => axios.get(`/question`).then((res: any) => res.data),
    enabled: !!groupId,
  });
