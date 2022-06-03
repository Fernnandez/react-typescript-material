import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { AppRoutes } from "./routes";
import { SideBar } from "./shared/components/SideBar/SideBar";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SideBar>
            <AppRoutes />
          </SideBar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
