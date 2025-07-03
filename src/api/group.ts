import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

type CreateGroupParams = { name: string; startedAt: string };
export const useCreateGroupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateGroupParams) =>
      axios.post('/group/', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.group.ME] });
    },
  });
};

type JoinGroupParams = { inviteCode: string };
export const useJoinGroupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: JoinGroupParams) =>
      axios.post('/group/join', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.group.ME] });
    },
  });
};

export const useMyGroupQuery = () =>
  useQuery({
    queryKey: [QUERY_KEY.group.ME],
    queryFn: () => axios.get('/group/me').then((res: any) => res.data),
  });
