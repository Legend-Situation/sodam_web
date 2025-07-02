import { useMutation } from '@tanstack/react-query';
import axios from './axios';

export const useRefreshToken = () =>
  useMutation(({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) =>
    axios.post('/jwt', { accessToken, refreshToken }).then(res => res.data)
  );

export const useUpdateNickname = () =>
  useMutation(({ nickname }: { nickname: string }) =>
    axios.put('/user', { nickname }).then(res => res.data)
  );
