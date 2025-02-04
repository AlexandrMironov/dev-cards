import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeModeProvider } from "shared/lib/theme-mode-provider";
import { NotFoundPage } from "pages/not-found-page";
import { ErrorPage } from "pages/error/ui";
import { NotificationProvider } from "shared/ui/notification-provider";
import { MainPage } from "pages/main";

const queryClient = new QueryClient();

function App() {

  return (
      <ThemeModeProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <NotificationProvider>
              <Router>
                    <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/error" element={<ErrorPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
              </Router>
          </NotificationProvider>
        </QueryClientProvider>
      </ThemeModeProvider>
  );
}

export default App;
