import api from './axios';

export const KAKAO_AUTH_URL =
  `${api.defaults.baseURL}/auth/kakao`;

// user
export const renewToken = (accessToken: string, refreshToken: string) =>
  api.post('/jwt', { accessToken, refreshToken });

export const setNickname = (nickname: string) => api.put('/user', { nickname });

// group
export const createGroup = (name: string, startedAt: string) =>
  api.post('/group/', { name, startedAt });

export const joinGroup = (inviteCode: string) =>
  api.post('/group/join', { inviteCode });

export const getMyGroup = () => api.get('/group/me');

// question
export const addQuestion = (content: string, date: string) =>
  api.post('/question', { content, date });

export const answerQuestion = (
  groupId: number,
  answer: string,
  weather: string,
) => api.post('/question/answer', { groupId, answer, weather });

export const getAnswers = (groupId: number) =>
  api.get(`/question/answer/${groupId}`);

export const getAnswerByDate = (groupId: number, date: string) =>
  api.get(`/question/answer/${groupId}/${date}`);

export const getGroupQuestions = (groupId: number) =>
  api.get(`/question/group/${groupId}/questions`);

// memo
export const createMemo = (
  groupId: number,
  date: string,
  content: string,
) => api.post('/memo/', { groupId, date, content });

export const getDayMemo = (groupId: number, date: string) =>
  api.get(`/memo/${groupId}/${date}`);

export const updateMemo = (memoId: number, content: string) =>
  api.patch(`/memo/${memoId}`, { content });

export const getMonthMemo = (groupId: number, month: string) =>
  api.get(`/memo/${groupId}/month/${month}`);

// token test
export const verifyToken = (email: string) => api.post('/gentoken', { email });
