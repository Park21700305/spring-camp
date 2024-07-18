import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import GoogleAuthLogin from "../loginBtn";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <IconButton
              color="inherit"
              component={Link}
              to="/"
              edge="start"
              sx={{ mr: 2 }}
            >
              <HomeIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/post">
              <CreateIcon fontSize="large" />
            </IconButton>
          </Typography>
          <GoogleAuthLogin />
        </Toolbar>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 박지성 - 한동대학교 하계 웹서비스 캠프
        </Typography>
      </Footer>
    </>
  );
};

export default Layout;

const Header = styled(AppBar)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
`;

const Footer = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 12px 0;
`;

const Main = styled(Container)`
  margin-top: 64px;
  margin-bottom: 64px;
`;
