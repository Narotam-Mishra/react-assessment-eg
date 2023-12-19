import './App.css';
import Cards from './components/Cards';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
