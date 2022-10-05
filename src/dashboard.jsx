import { useState } from 'react';
import SideBar from './components/sideBar/sideBar';
import Managment from './components/managment/managment';
import { mockData } from './data';

function Dashboard() {
  const [data, setData] = useState(mockData);
  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideBar setData={setData} />
      <Managment data={data} setData={setData} />
    </div>
  );
}

export default Dashboard;
