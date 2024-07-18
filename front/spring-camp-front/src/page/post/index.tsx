import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Box } from "@mui/material";
import styled from "styled-components";
import { IFormInput } from "../../types";
import Lottie from "lottie-react";
import postAnimation from "../../asset/img/글작성움직이는거.json";
import useApiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const apiClient = useApiClient();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await apiClient.post("/api/board/write", data);
      console.log("Post created successfully:", response.data);

      navigate("/board");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <FormContainer maxWidth="sm">
      <AnimationWrapper>
        <LottieAnimation animationData={postAnimation} />
      </AnimationWrapper>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          label="제목"
          variant="outlined"
          {...register("title", { required: "제목 입력하세요~" })}
          error={!!errors.title}
          helperText={errors.title ? errors.title.message : ""}
        />
        <StyledTextField
          label="내용"
          variant="outlined"
          multiline
          rows={4}
          {...register("content", { required: "내용 입력하세요~" })}
          error={!!errors.content}
          helperText={errors.content ? errors.content.message : ""}
        />
        <StyledButton type="submit" variant="contained" color="primary">
          글 작성 완료!!!
        </StyledButton>
      </Box>
    </FormContainer>
  );
};

export default PostForm;

const FormContainer = styled(Container)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    margin-bottom: 20px;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const LottieAnimation = styled(Lottie)`
  width: 200px;
  height: 200px;
`;
