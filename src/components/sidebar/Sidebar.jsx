import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Rms</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span></li>
                    <p className="title">Lists</p>
                    <li>
                        <Person2OutlinedIcon className="icon"/>
                        <span>Users</span></li>
                    <li>
                        <Inventory2OutlinedIcon className="icon"/>
                        <span>Products</span></li>
                    <li>
                        <PointOfSaleOutlinedIcon className="icon"/>
                        <span>Orders</span></li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon"/>
                        <span>Delivery</span></li>
                    <p className="title">Usefull</p>
                    <li>
                        <MonitorOutlinedIcon className="icon"/>
                        <span>Stats</span></li>
                    <li>
                        <NotificationsOutlinedIcon className="icon"/>
                        <span>Notification</span></li>
                    <p className="title">Services</p>
                    <li>
                        <HealthAndSafetyOutlinedIcon className="icon"/>
                        <span>System Health</span></li>
                    <li>
                        <HistoryOutlinedIcon className="icon"/>
                        <span>Logs</span></li>
                    <li>
                        <SettingsApplicationsOutlinedIcon className="icon"/>
                        <span>Setting</span></li>
                    <p className="title">Users</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span></li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>
        </div>
    );
}

export default Sidebar;