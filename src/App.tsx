import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";
import { MantineProvider, AppShell, Navbar, Header } from "@mantine/core";
import Sidebar from "./components/Sidebar";

import { NavMenu } from "./layout/NavMenu/NavMenu";
import { Breadcrumbs } from "./layout/Breadcrumbs/Breadcrumbs";
import { RoutesRenderer } from "./routing/RoutesRenderer";
import { routes } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} p="xs">
              <NavMenu routes={routes} />
               {/*
               <Sidebar />
          */}
            </Navbar>
          }
          header={
            <Header height={60} p="xs">
              {/* Header content */}
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Breadcrumbs routes={routes} />
          <RoutesRenderer routes={routes} />
          {/* 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:manufactor/:product" element={<DynamicPage />} />
          </Routes>
          */}
        </AppShell>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
