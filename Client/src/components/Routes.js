import { useRoutes } from "react-router";
import Analyze from "./pages/Analyze";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import { Navigate } from "react-router";
import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";
export default function Routes() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "main", element: <Dashboard /> },
        { path: "search", element: <Search /> },
        { path: "analyze", element: <Analyze /> },
        { path: "about", element: <About /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    {
      path: "/",
      children: [{ path: "/", element: <Navigate to='/dashboard/main' /> }],
    },
  ]);
}
