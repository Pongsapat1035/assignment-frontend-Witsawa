import { createBrowserRouter } from "react-router";

import AuthPage from "./pages/auth/Page.tsx";
import DashboardPage from "./pages/dashboard/Page.tsx";
import Layout from "./components/layout/Layout.tsx";
import { protectedLoader } from "./loaders/protectedLoader.ts";

  const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthPage,
  },
  {
    path: "/dashboard",
    loader: protectedLoader,
    Component: Layout,
    children: [{ index: true, Component: DashboardPage }],
  },
]);

export default router