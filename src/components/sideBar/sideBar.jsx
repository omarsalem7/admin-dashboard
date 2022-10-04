import React, { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SidebarData from './SidebarData';
import SearchInput from '../searchInput/searchInput';
import AccordionField from '../accordion/accordion';
import Logo from '../../assets/logo.jpg';
import './sideBar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="navbar-container">
      <span className="navbar">
        <button type="button" className="open-btn">
          <MenuOpenIcon onClick={showSidebar} />
        </button>
      </span>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <button type="button" className="close-btn">
              <MenuOpenIcon onClick={showSidebar} />{' '}
            </button>
          </li>
          <li className="logo">
            <img src={Logo} alt="logo" width="50%" />
          </li>
          <li>
            <SearchInput />
          </li>
          <li className="nav-dashboard-label">
            <DashboardIcon />
            <span> Dashboard</span>
          </li>
          <li>
            <span style={{ color: 'gray', fontSize: '15px' }}>SETTINGS</span>
          </li>
          <li>
            <AccordionField />
          </li>
          {/* {SidebarData.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          ))} */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
