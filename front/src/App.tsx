import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
