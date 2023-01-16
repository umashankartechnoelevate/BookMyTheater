
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import DashHeader from '../layoutComponents/DashHeader';


const DashboardLayout = () => {
    return (
        <div className='dashMain'>
            <DashHeader />
            <Outlet />
        </div>
    )
}




export default DashboardLayout