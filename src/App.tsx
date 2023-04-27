import * as React from "react";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import HomePage from "./pages/Home/HomePage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
