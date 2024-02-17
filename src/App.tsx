import React, { FC, useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "./components/pages/PronyDashboard/Dashboard/Dashboard";
import { ThemeProvider } from "./components/widgets/ThemeContextType/ThemeContextType";

// import { register } from "swiper/element/bundle";
// register();

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
