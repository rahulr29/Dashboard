import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'> 
    <div className="top">
        <span className="logo">Admin</span>
    </div>
    <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
               <DashboardIcon className="icon"/>
               <spam>Dashboard</spam>
            </li>
            <li>
               <BarChartSharpIcon className="icon"/>
               <spam>Analytics</spam>
            </li>
            <li>
            <CurrencyExchangeSharpIcon className="icon"/>
               <spam>Trading</spam>
            </li>
            <li>
            <NotificationsActiveIcon className="icon" />
               <spam>Notification</spam>
            </li>
            <li className="log">
           <LogoutIcon className="icon"/>
               <spam >Logout</spam>
            </li>
        </ul>
    </div>
    <div className="botton">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
    </div>
    </div>
  )
}

export default Sidebar