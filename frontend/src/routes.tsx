import Home from "./pages/Home";
import OrgChart from "./pages/OrgChart";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/org-chart", element: <OrgChart /> },
];

export default routes;
