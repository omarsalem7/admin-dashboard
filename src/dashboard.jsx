import { useState, useEffect } from 'react';
import SideBar from './components/sideBar/sideBar';
import Managment from './components/managment/managment';
// import { mockData } from './data';

function Dashboard() {
  const mockData = JSON.parse(localStorage.getItem('users'));
  const [data, setData] = useState(mockData);
  console.log(data);

  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideBar setData={setData} />
      <Managment data={data} setData={setData} />
    </div>
  );
}

export default Dashboard;
