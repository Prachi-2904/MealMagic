import './App.css';
import HomeNavbar from './Components/HomeNavbar';
import Home from'./Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
  <div>
  <HomeNavbar/>
  <Home/>
  <Routes>
    </Routes>
  </div>
  </Router>
  );
}

export default App;
