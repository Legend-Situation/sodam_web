import { useMutation, useQuery } from '@tanstack/react-query';
import axios from './axios';

type CreateMemoParams = { groupId: number; date: string; content: string };
export const useCreateMemo = () =>
  useMutation((data: CreateMemoParams) =>
    axios.post('/memo/', data).then(res => res.data)
  );

export const useMemoByDate = (groupId: number, date: string) =>
  useQuery(['memo', groupId, date], () =>
    axios.get(`/memo/${groupId}/${date}`).then(res => res.data)
  );

type UpdateMemoParams = { id: number; content: string };
export const useUpdateMemo = () =>
  useMutation((data: UpdateMemoParams) =>
    axios.patch(`/memo/${data.id}`, { content: data.content }).then(res => res.data)
  );

export const useMonthMemos = (groupId: number, month: string) =>
  useQuery(['memoMonth', groupId, month], () =>
    axios.get(`/memo/${groupId}/month/${month}`).then(res => res.data)
  );
