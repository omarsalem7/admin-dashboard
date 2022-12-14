import React, { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CustomInput from '../customInput/customInput';
import AccordionField from '../accordion/accordion';
import Logo from '../../assets/logo.jpg';
import './sideBar.css';
import { filterWithEmail } from '../../utils';

function SideBar({ setData }) {
  const [sidebar, setSidebar] = useState(true);
  const [query, setQuery] = useState('');
  const showSidebar = () => setSidebar(!sidebar);
  function handleChange(event) {
    setQuery(event.target.value);
    setData(filterWithEmail(query));
  }
  return (
    <div className="navbar-container">
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle"></li>
          <li className="logo">
            <img src={Logo} alt="logo" width="50%" />
          </li>
          <li>
            <CustomInput
              onChange={handleChange}
              value={query}
              placeholder="Search..."
            />
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
        </ul>
      </nav>
      <span className="navbar">
        <button type="button" className="open-btn">
          <MenuOpenIcon onClick={showSidebar} />
        </button>
      </span>
    </div>
  );
}

export default SideBar;
