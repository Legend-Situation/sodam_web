import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

export const useRefreshTokenMutation = () => {
  return useMutation(({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) =>
    axios.post('/jwt', { accessToken, refreshToken }).then((res: any) => res.data)
  );
};

export const useUpdateNicknameMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ nickname }: { nickname: string }) =>
      axios.put('/user', { nickname }).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.user.PROFILE] });
    },
  });
};
