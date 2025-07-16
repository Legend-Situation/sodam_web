import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

type CreateTimeCapsuleParams = {
  groupId: number;
  title: string;
  content: string;
  openDate: string;
  type: 'text' | 'image' | 'voice';
};

export const useCreateTimeCapsuleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTimeCapsuleParams) =>
      axios.post('/timecapsule', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.timecapsule.LIST] });
    },
  });
};

export const useTimeCapsuleListQuery = (groupId: number) =>
  useQuery({
    queryKey: [QUERY_KEY.timecapsule.LIST, groupId],
    queryFn: () =>
      axios.get(`/timecapsule/group/${groupId}`).then((res: any) => res.data),
    enabled: !!groupId,
  });

export const useOpenTimeCapsuleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (capsuleId: number) =>
      axios.post(`/timecapsule/${capsuleId}/open`).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.timecapsule.LIST] });
    },
  });
};