import React, { FC, useState, useEffect, Suspense, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { GlobalProvider } from "./components/widgets/GlobalContext/GlobalContext";
import Dashboard from "./components/pages/PronyDashboard/Dashboard/Dashboard";
import Boards from "./components/pages/PronyDashboard/Boards/Boards";

// import { register } from "swiper/element/bundle";
// register();

const App: FC = () => {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/boards" element={<Boards />} />
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
