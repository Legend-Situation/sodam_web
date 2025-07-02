import { useMutation } from '@tanstack/react-query';
import axios from './axios';

type TokenParams = { email: string };
export const useGenerateToken = () =>
  useMutation((data: TokenParams) =>
    axios.post('/gentoken', data).then((res: any) => res.data)
  );
