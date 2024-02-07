import './App.css';
import HomeNavbar from './Components/HomeNavbar';
import Home from'./Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import ChefRegistrationForm from './Components/ChefRegistrationForm';


function App() {
  return (
    <BrowserRouter>
  <div>
  <HomeNavbar/>
  <Home/>
  <Routes>
  <Route path="/loginform" element={<LoginForm></LoginForm>}></Route>
  <Route path="/chefregister" element={<ChefRegistrationForm></ChefRegistrationForm>}></Route>
  <Route ></Route>
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
