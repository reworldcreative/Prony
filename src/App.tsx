import React, { FC, useState, useEffect, Suspense, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { GlobalProvider } from "./components/widgets/GlobalContext/GlobalContext";

const Dashboard = React.lazy(() => import("./components/pages/PronyDashboard/Dashboard/Dashboard"));
const Boards = React.lazy(() => import("./components/pages/PronyDashboard/Boards/Boards"));
const Posts = React.lazy(() => import("./components/pages/PronyDashboard/Posts/Posts"));
const Layout = React.lazy(() => import("./components/widgets/Layout/Layout"));
const PostView = React.lazy(() => import("./components/pages/PronyDashboard/PostView/PostView"));
const PostVoters = React.lazy(() => import("./components/pages/PronyDashboard/PostVoters/PostVoters"));
const Tags = React.lazy(() => import("./components/pages/PronyDashboard/Tags/Tags"));
const Users = React.lazy(() => import("./components/pages/PronyDashboard/Users/Users"));
const User = React.lazy(() => import("./components/pages/PronyDashboard/User/User"));
const Activities = React.lazy(() => import("./components/pages/PronyDashboard/Activities/Activities"));
const Segments = React.lazy(() => import("./components/pages/PronyDashboard/Segments/Segments"));
const Statuses = React.lazy(() => import("./components/pages/PronyDashboard/Statuses/Statuses"));
const Changelog = React.lazy(() => import("./components/pages/PronyDashboard/Changelog/Changelog"));
const ChangelogLabels = React.lazy(() => import("./components/pages/PronyDashboard/ChangelogLabels/ChangelogLabels"));

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
            <Route path="tags" element={<Tags />} />
            <Route path="users" element={<Users />} />
            <Route path="user/:id" element={<User />} />
            <Route path="activities" element={<Activities />} />
            <Route path="segments" element={<Segments />} />
            <Route path="statuses" element={<Statuses />} />
            <Route path="changelog" element={<Changelog />} />
            <Route path="changelog-labels" element={<ChangelogLabels />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
