import './App.css';
import BarGraph from './components/BarGraph';
import Cards from './components/Cards';
import Category from './components/Category';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TableCom from './components/TableCom';
import "primereact/resources/themes/saga-blue/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Cards />
      <Category />
      <TableCom />
      <BarGraph />
    </div>
  );
}

export default App;
