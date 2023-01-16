import { useRoutes } from 'react-router-dom'
import AuthRoutes from './AuthRoutes'
import DashboardRoutes from './DashboardRoutes';


const Routing = () => {
    const route = useRoutes([
        ...AuthRoutes,
        DashboardRoutes
    ])
    return route
}

export default Routing