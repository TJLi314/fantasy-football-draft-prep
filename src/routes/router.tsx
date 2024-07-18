import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import ReceiversHome from "./homePages/ReceiversHome";
import QuarterbacksHome from "./homePages/QuarterbacksHome";
import RunningbacksHome from "./homePages/RunningbacksHome";
import TightendsHome from "./homePages/TightendsHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "receivers", element: <ReceiversHome /> },
      { path: "runningbacks", element: <RunningbacksHome /> },
      { path: "quarterbacks", element: <QuarterbacksHome /> },
      { path: "tightends", element: <TightendsHome /> },
    ],
  },
]);

export default router;
