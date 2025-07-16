import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

export const usePointsQuery = () =>
  useQuery({
    queryKey: [QUERY_KEY.point.BALANCE],
    queryFn: () => axios.get('/point/balance').then((res: any) => res.data),
  });

export const usePointHistoryQuery = () =>
  useQuery({
    queryKey: [QUERY_KEY.point.HISTORY],
    queryFn: () => axios.get('/point/history').then((res: any) => res.data),
  });

type EarnPointParams = { type: string; amount: number; description: string };
export const useEarnPointMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: EarnPointParams) =>
      axios.post('/point/earn', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.point.BALANCE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.point.HISTORY] });
    },
  });
};

type SpendPointParams = { amount: number; itemId: number; description: string };
export const useSpendPointMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SpendPointParams) =>
      axios.post('/point/spend', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.point.BALANCE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.point.HISTORY] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.shop.INVENTORY] });
    },
  });
};