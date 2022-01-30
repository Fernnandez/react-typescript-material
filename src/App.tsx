import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts";
import { AppRoutes } from "./routes";
import { SideBar } from "./shared/components/SideBar/SideBar";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideBar>
          <AppRoutes />
        </SideBar>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
