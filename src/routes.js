import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import PlayerLog from './pages/PlayerLog';

import Backup from './pages/Backup/index';
import Setting from './pages/System/index';
import Github from './pages/Github/index';
import Panel from './pages/Panel/index';
import DstServerList from './pages/DstServerList/index';
import Begin from './pages/begin/index';
import UserProfile from "./pages/User/UserProfile";
import Link from "./pages/WebLink";
import Modinfo from "./pages/Mod/Modinfo";
import Help from "./pages/Help";
import Levels8 from "./pages/Levels8";
import Home2 from "./pages/Home2";
import OnlinePlayers from "./pages/Player/OnlinePlayers";
import Forest from "./pages/Levels8/LevelSetting/LeveldataoverrideView";
import Game from "./pages/Game";
import TemplateConfig from "./pages/TemplateConfig";
import AddTemplateFile from "./pages/TemplateConfig/AddTemplateFile";
import HomeInfo from "./pages/HomeInfo";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'log', element: <PlayerLog /> },

        { path: 'panel', element: <Panel /> },
        { path: 'cluster', element: <Home2 /> },
        { path: '8level', element: <Levels8 /> },
        { path: 'player', element: <OnlinePlayers /> },
        { path: 'backup', element: <Backup /> },
        { path: 'setting', element: <Setting /> },
        { path: 'github', element: <Github /> },
        { path: 'help', element: <Help /> },
        { path: 'dst/server', element: <DstServerList /> },
        { path: 'user/Profile', element: <UserProfile /> },
        { path: 'link', element: <Link /> },
        { path: 'modinfo/:modId', element: <Modinfo /> },

        { path: 'view', element: <Forest /> },
        { path: 'game', element: <Game /> },
        { path: 'template/config', element: <TemplateConfig /> },
        { path: 'addTemplate/:id', element: <AddTemplateFile /> },
        { path: 'home/info', element: <HomeInfo /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'init',
      element: <Begin />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
