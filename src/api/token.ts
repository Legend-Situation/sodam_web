import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

type TokenParams = { email: string };
export const useGenerateTokenMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TokenParams) =>
      axios.post('/gentoken', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.user.PROFILE] });
    },
  });
};
