import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
import Bar from "./pages/bar";
import Pie from "./pages/pie";
import Line from "./pages/line";
import Geography from "./pages/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleIsCollapsed = () => {
    setIsCollapsed((value) => !value);
  };

  const handleIsToggled = () => {
    setIsToggled((value) => !value);
  };

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar
        isMobile={isMobile}
        isCollapsed={isCollapsed}
        handleIsCollapsed={handleIsCollapsed}
        isToggled={isToggled}
        handleIsToggled={handleIsToggled} />

        <main className={isCollapsed ? 'is-collapsed' : undefined}>
          <TopBar isMobile={isMobile} isToggled={isToggled} handleIsToggled={handleIsToggled} />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
