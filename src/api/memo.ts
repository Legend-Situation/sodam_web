import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

type CreateMemoParams = { groupId: number; date: string; content: string };
export const useCreateMemoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateMemoParams) =>
      axios.post('/memo/', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.memo.MONTH] });
    },
  });
};

export const useMemoByDateQuery = (groupId: number, date: string) =>
  useQuery({
    queryKey: [QUERY_KEY.memo.BY_DATE, groupId, date],
    queryFn: () => axios.get(`/memo/${groupId}/${date}`).then((res: any) => res.data),
    enabled: !!groupId && !!date,
  });

type UpdateMemoParams = { id: number; content: string };
export const useUpdateMemoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateMemoParams) =>
      axios.patch(`/memo/${data.id}`, { content: data.content }).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.memo.BY_DATE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.memo.MONTH] });
    },
  });
};

export const useMonthMemosQuery = (groupId: number, month: string) =>
  useQuery({
    queryKey: [QUERY_KEY.memo.MONTH, groupId, month],
    queryFn: () =>
      axios.get(`/memo/${groupId}/month/${month}`).then((res: any) => res.data),
    enabled: !!groupId && !!month,
  });
