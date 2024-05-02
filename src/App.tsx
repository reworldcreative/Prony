import React, { FC, useState, useEffect, Suspense, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { GlobalProvider } from "./components/widgets/GlobalContext/GlobalContext";
import ClientLayout from "./components/widgets/Layout/ClientLayout";
import Layout from "./components/widgets/Layout/Layout";

// const Layout = React.lazy(() => import("./components/widgets/Layout/Layout"));
// const ClientLayout = React.lazy(() => import("./components/widgets/Layout/ClientLayout"));
const Dashboard = React.lazy(() => import("./components/pages/PronyDashboard/Dashboard/Dashboard"));
const Boards = React.lazy(() => import("./components/pages/PronyDashboard/Boards/Boards"));
const Posts = React.lazy(() => import("./components/pages/PronyDashboard/Posts/Posts"));
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
const Integrations = React.lazy(() => import("./components/pages/PronyDashboard/Integrations/Integrations"));
const SocialAccounts = React.lazy(() => import("./components/pages/ClientArea/SocialAccounts/SocialAccounts"));
const Profile = React.lazy(() => import("./components/pages/ClientArea/Profile/Profile"));
const Payment = React.lazy(() => import("./components/pages/ClientArea/Payment/Payment"));
const BillingPlan = React.lazy(() => import("./components/pages/ClientArea/BillingPlan/BillingPlan"));

const Workspaces = React.lazy(() => import("./components/pages/ClientArea/Workspaces/Workspaces"));

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
            <Route path="integrations" element={<Integrations />} />
          </Route>
          <Route path="client" element={<ClientLayout />}>
            <Route index element={<Workspaces />} />
            <Route path="social-accounts" element={<SocialAccounts />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payment" element={<Payment />} />
            <Route path="billing" element={<BillingPlan />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
