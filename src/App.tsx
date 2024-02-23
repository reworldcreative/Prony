import React, { FC, useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/widgets/ThemeContextType/ThemeContextType";
import Dashboard from "./components/pages/PronyDashboard/Dashboard/Dashboard";
import Boards from "./components/pages/PronyDashboard/Boards/Boards";

// import { register } from "swiper/element/bundle";
// register();

const App: FC = () => {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/boards" element={<Boards />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
