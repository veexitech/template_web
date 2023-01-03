import React from "react";
import Layout from "../components/layout/";
import Login from "../pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import MENU from "../system/menu";
import { generate_routes_dinamics } from "../util/";
interface IPrivateRoute {
  auth: any;
  children: any;
}
interface IRoutes {}

const Routes: React.FC<IRoutes> = (props) => {
  const user = {
    id: "1",
    name: "robin",
    permissions: ["analyze"],
    roles: ["admin"],
    isAuthenticated: true,
  };

  const {} = props;

  // const router = createBrowserRouter(generate_routes_dinamics(MENU));

  const RoutesPrivates: React.FC<any> = () => {
    return (
      <Layout layout="menuLeft">
        <div>
          {generate_routes_dinamics(MENU).map((route) => {
            if (route.isPrivate)
              return <Route path="dashboard" element={route.element} />;
          })}
        </div>
      </Layout>
    );
  };

  const ProtectedRoutes = (props: any) => {
    const auth = user?.isAuthenticated;

    return auth ? <Outlet /> : <Navigate to="/login" />;
  };

  const PublicRoutes = (props: any) => {
    const auth = user?.isAuthenticated;

    return auth ? <Navigate to="/dashboard" /> : <Outlet />;
  };

  return (
    <Routes>
      {/* <Route path="/" element={<ProtectedRoutes />}> */}
      {/* <Route path="/" element={<InnerContent/>}>
            <Route path="/" element={<Navigate replace to="dashboard" />}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="tabs" element={<Tabs/>}>
                <Route path="/tabs" element={<Navigate replace to="tab1" />}/>
                <Route path="tab1" element={<Tab1/>}/>
                <Route path="tab2" element={<Tab2/>}/>
                <Route path="tab3" element={<Tab3/>}/>
            </Route>                       
             <Route path="settings" element={<Settings/>}/>            
             <Route path="users" element={<Users extraItem="test extra item from router"/>}/>            
             <Route path="users/:userId" element={<SingleUser/>}/>           
             <Route path="users/new" element={<NewUser/>}/>            */}

      {/* </Route> */}
      {/* </Route> */}

      {/* <Route path="login" element={<PublicRoutes />}> */}
      <Route path="/login" element={<Login />} />
      {/* </Route> */}
    </Routes>
  );
};

export default Routes;
