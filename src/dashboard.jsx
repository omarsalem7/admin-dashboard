import { useState } from 'react';
import SideBar from './components/sideBar/sideBar';
import Managment from './components/managment/managment';
import { fakeData } from './data';

function Dashboard() {
  const [data, setData] = useState(fakeData);
  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideBar data={fakeData} setData={setData} />
      <Managment data={data} />
    </div>
  );
}

export default Dashboard;
