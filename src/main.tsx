import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./routes/Dashboard";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { GlobalContextProvider } from "./context/global.context";
import { Drives } from "./routes/Drives";
import { Charges } from "./routes/Charges";
import { Battery } from "./routes/Battery";
import { Climate } from "./routes/Climate";
import { Tires } from "./routes/Tires";
import { DriveDetails } from "./routes/Drives/DriveDetails";
import { DriveAnalytics } from "./routes/Drives/DriveAnalytics";
import { DriveMap } from "./routes/Drives/DriveMap";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/battery",
        element: <Battery />,
      },
      {
        path: "/climate",
        element: <Climate />,
      },
      {
        path: "/tires",
        element: <Tires />,
      },
      {
        path: "/drives",
        element: <Drives />,
      },
      {
        path: "/drives/analytics",
        element: <DriveAnalytics />,
      },
      {
        path: "/drives/map",
        element: <DriveMap />,
      },
      {
        path: "/drives/:id",
        element: <DriveDetails />,
      },
      {
        path: "/charges",
        element: <Charges />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <RouterProvider router={router} />
      </GlobalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
