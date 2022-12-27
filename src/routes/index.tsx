import React from "react";
import Layout from "../components/layout/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MENU from "../system/menu";
import { generate_routes_dinamics } from "../util/";
interface IRoutes {}

const Routes: React.FC<IRoutes> = (props) => {
  const {} = props;

  const router = createBrowserRouter(generate_routes_dinamics(MENU));

  return (
    <Layout layout="menuLeft">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Layout>
  );
};

export default Routes;
