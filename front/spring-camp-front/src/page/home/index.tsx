import React from "react";
import styled from "styled-components";
import { Container, Typography, List, ListItem, Link as MuiLink, Box } from "@mui/material";
import { docs } from "../../asset/data/docs";

const Home = () => {
  return (
    <Div>
      <H1>어서와요 홈 입니다.</H1>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          방학동안 이거 다 보면 웹개발 마스터 특히 마지막 링크  
        </Typography>
        <List>
          {docs.map((doc, index) => (
            <ListItem key={index}>
              <Box display="flex" alignItems="center">
                <Logo src={doc.logo} alt={`${doc.name} logo`} />
                <MuiLink
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginLeft: 2 }}
                >
                  {doc.name}
                </MuiLink>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Div>
  );
};

export default Home;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.header0};
  color: ${({ theme }) => theme.colors.blue};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
