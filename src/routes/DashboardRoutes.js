import DashHeader from "../layouts/layoutComponents/DashHeader"
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from './../layouts/dashboardLayout/DashboardLayout';
import Theaters from './../pages/dashboard/Theaters';

const DashboardRoutes = {
    path: "/dashboard",
    element: <DashboardLayout />,

    children: [
        {
            path: "/dashboard",
            element: <Dashboard />

        },
        {
            path: "/dashboard/theaters",
            element: <Theaters />

        },
        {
            path: "/dashboard/seats",
            element: <Theaters />

        }
    ]
}

export default DashboardRoutes