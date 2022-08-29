import React, { useState } from "react";
import "./App.css";
import routes, { RouteType } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import LightTheme from "./assets/theme/light";
import DarkTheme from "./assets/theme/dark";
import storage from "./common/utils/storage";
import Header from "./components/Header";

import Error404 from "./pages/Error404";

function App() {
  const [theme, setTheme] = useState(storage.getTheme());


  const getRoutes = (allRoutes: Array<RouteType>) =>
    allRoutes.map((route: RouteType) => {
      return (
        route.route && (
          <Route
            path={route.route}
            element={route.component}
            key={route.key}
          />
        )
      );
    });

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          storage.setTheme(theme.id);
          setTheme((theme) => (theme.id === "light" ? DarkTheme : LightTheme));
        }
      }}>
      <BrowserRouter>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
