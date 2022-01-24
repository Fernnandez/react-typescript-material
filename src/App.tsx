import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts";
import { AppRoutes } from "./routes";

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
