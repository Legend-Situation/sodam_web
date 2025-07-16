import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

export const useGrowthTreeQuery = (groupId: number) =>
  useQuery({
    queryKey: [QUERY_KEY.growthtree.STATUS, groupId],
    queryFn: () =>
      axios.get(`/growthtree/${groupId}`).then((res: any) => res.data),
    enabled: !!groupId,
  });

type WaterTreeParams = { groupId: number; points: number };
export const useWaterTreeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: WaterTreeParams) =>
      axios.post('/growthtree/water', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.growthtree.STATUS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.point.BALANCE] });
    },
  });
};

export const useTreeMilestonesQuery = (groupId: number) =>
  useQuery({
    queryKey: [QUERY_KEY.growthtree.MILESTONES, groupId],
    queryFn: () =>
      axios.get(`/growthtree/${groupId}/milestones`).then((res: any) => res.data),
    enabled: !!groupId,
  });