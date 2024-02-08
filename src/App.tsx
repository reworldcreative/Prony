import React, { FC, useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "./pages/PronyDashboard/Dashboard/Dashboard";
import { register } from "swiper/element/bundle";
import { ThemeProvider } from "./components/ThemeContextType/ThemeContextType";
register();

const App: FC = () => {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
