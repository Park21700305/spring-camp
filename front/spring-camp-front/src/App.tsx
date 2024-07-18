import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID!;

const App = () => {
  
  return (
    <GoogleOAuthProvider
      clientId={clientId}
      onScriptLoadError={() => console.log("실패")}
      onScriptLoadSuccess={() => console.log("성공")}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
