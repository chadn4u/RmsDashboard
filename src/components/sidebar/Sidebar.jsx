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
import {Link} from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Rms</span></Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span></li>
                    </Link>
                    <p className="title">Lists</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                        <li>
                        <Person2OutlinedIcon className="icon"/>
                        <span>Users</span></li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <Inventory2OutlinedIcon className="icon"/>
                        <span>Products</span></li>
                    </Link>
                    
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
                <div className="colorOptions" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOptions" onClick={() => dispatch({ type: "DARK" })}></div>
                {/* <div className="colorOptions"></div>
                <div className="colorOptions"></div> */}
            </div>
        </div>
    );
}

export default Sidebar;