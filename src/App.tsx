import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { register } from "swiper/element/bundle";
import Dashboard from "./pages/PronyDashboard/Dashboard/Dashboard";
register();

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}
