import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import RelogioPage from './pages/RelogioPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/relogio" />, index: true },
        { path: 'relogio', element: <RelogioPage /> }
      ],
    },
    { path: '*', element: <Navigate to="/dashboard/relogio" /> },
  ]);

  return routes;
}
