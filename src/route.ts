import { createBrowserRouter } from "react-router";

import AuthPage from "./pages/auth/Page.tsx";
import DashboardPage from "./pages/dashboard/Page.tsx";
import Layout from "./components/Layout.tsx";

  const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthPage,
  },
  {
    path: "/dashboard",
    Component: Layout,
    children: [{ index: true, Component: DashboardPage }],
  },
]);

export default router