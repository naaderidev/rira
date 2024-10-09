import { FC } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";

const App: FC = () => {
  const router = useRoutes(routes) as JSX.Element | null;
  return (
    <div className="grid grid-cols-6 bg-gray-100">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Topbar />
        <div className="container">{router}</div>
      </div>
    </div>
  );
};

export default App;
