import React, { useEffect, useState } from "react";
import { useRoutes, Navigate } from "react-router";
import { io } from "socket.io-client";
import axios from "axios";

import Analyze from "./pages/Analyze";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";
import { DefaultDataConfig } from "./config/defaultData";

const socket = io.connect("http://localhost:4001");

export default function Routes() {
  const [data, setData] = useState(DefaultDataConfig);
  const [orders, setOrders] = useState([]);
  const [associationRules, setAssociationRules] = useState([]);

  useEffect(() => {
    searchOrders();
  }, []);

  useEffect(() => {
    socket.on("orders_data", (res) => {
      console.log(res);
      setData(res);
    });
  }, [socket]);

  const searchOrders = async (query) => {
    console.log(query);
    await axios("http://localhost:4000/api/ordersByDate", {
      params: query,
    })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => console.error(err));
  };

  const buildModel = async (query) => {
    console.log(query);

    await axios("http://localhost:4000/api/buildModel", {
      params: query,
    })
      .then((res) => {
        console.log(res.data);
        setAssociationRules(res.data);
      })
      .catch((err) => console.error(err));
  };

  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "main", element: <Dashboard data={data} /> },
        {
          path: "search",
          element: <Search orders={orders} searchOrders={searchOrders} />,
        },
        {
          path: "analyze",
          element: (
            <Analyze
              data={associationRules}
              buildModel={buildModel}
            />
          ),
        },
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
