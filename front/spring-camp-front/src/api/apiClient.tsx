import axios, { AxiosInstance } from 'axios';
import { useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userState } from '../context/userState';

const useApiClient = (): AxiosInstance => {
  const navigate = useNavigate();
  const resetUserState = useResetRecoilState(userState);
  
  const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });

  // 응답 인터셉터 설정
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // 세션 만료 또는 인증 실패 처리
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        // 필요에 따라 사용자 상태 초기화 및 로그인 페이지로 리디렉션
        resetUserState();
        navigate('/');
      }
      return Promise.reject(error);
    }
  );

  return apiClient;
};

export default useApiClient;
