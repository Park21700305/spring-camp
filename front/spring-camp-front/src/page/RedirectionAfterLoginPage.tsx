import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";
import { userState } from "../context/userState";
import { useNavigate } from "react-router-dom";
import useApiClient from "../api/apiClient";
import { User } from "../types";

const RedirectionAfterLoginPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();
  const apiClient = useApiClient();

  useEffect(() => {
    apiClient
      .get<User>('/api/userinfo')
      .then((response) => {
        setUserInfo(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Fetching user info failed:', error);
      });
  }, [setUserInfo, navigate, apiClient]);

  if (!userInfo) {
    return (
      <Div>
        <Spinner />
      </Div>
    );
  }

  return null;
};

export default RedirectionAfterLoginPage;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 16px solid ${theme.colors.blue};
  border-top: 16px solid ${theme.colors.darkBlue};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
