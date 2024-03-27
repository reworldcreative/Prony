import React, { FC, useState, useEffect, Suspense, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { GlobalProvider } from "./components/widgets/GlobalContext/GlobalContext";

const Dashboard = React.lazy(() => import("./components/pages/PronyDashboard/Dashboard/Dashboard"));
const Boards = React.lazy(() => import("./components/pages/PronyDashboard/Boards/Boards"));
const Posts = React.lazy(() => import("./components/pages/PronyDashboard/Posts/Posts"));
const Layout = React.lazy(() => import("./components/widgets/Layout/Layout"));
const PostView = React.lazy(() => import("./components/pages/PronyDashboard/PostView/PostView"));
const PostVoters = React.lazy(() => import("./components/pages/PronyDashboard/PostVoters/PostVoters"));

// import { register } from "swiper/element/bundle";
// register();

const App: FC = () => {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="boards" element={<Boards />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post-view/:id" element={<PostView />} />
            <Route path="post-voters/:id" element={<PostVoters />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
