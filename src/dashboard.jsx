import Navbar from './components/sideBar/sideBar';
import Managment from './components/managment/managment';
function Dashboard() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Navbar />
      <Managment />
    </div>
  );
}

export default Dashboard;
