import { useMutation, useQuery } from '@tanstack/react-query';
import axios from './axios';

type CreateGroupParams = { name: string; startedAt: string };
export const useCreateGroup = () =>
  useMutation((data: CreateGroupParams) =>
    axios.post('/group/', data).then((res: any) => res.data)
  );

type JoinGroupParams = { inviteCode: string };
export const useJoinGroup = () =>
  useMutation((data: JoinGroupParams) =>
    axios.post('/group/join', data).then((res: any) => res.data)
  );

export const useMyGroup = () =>
  useQuery(['group', 'me'], () =>
    axios.get('/group/me').then((res: any) => res.data)
  );
