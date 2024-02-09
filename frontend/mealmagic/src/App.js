import './App.css';
import HomeNavbar from './Components/Home/HomeNavbar';
import Home from'./Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import registrationForm from './Components/ChefRegistrationForm';
import ChefRegistrationForm from './Components/ChefRegistrationForm';
import SignUp from './Components/SignUp';
import FindAChef from './Components/FindAChef';


function App() {
  return (
    <Router>
    <div className='main-container'>
      <HomeNavbar />
      <div className='min-h'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<LoginForm></LoginForm>}/>
          <Route path='/signup' element={<SignUp></SignUp>}/>
          <Route path='/chefregister' element={<ChefRegistrationForm></ChefRegistrationForm>}/>
          <Route path='/findallchef' element={<FindAChef></FindAChef>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
