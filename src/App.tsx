import React, { FC, useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { register } from "swiper/element/bundle";
import Dashboard from "./pages/PronyDashboard/Dashboard/Dashboard";
register();

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
