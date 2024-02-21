import './App.css';
import HomeNavbar from './Components/Home/HomeNavbar';
import Home from'./Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import ChefRegistrationForm from './Components/ChefRegistrationForm';
import SignUp from './Components/SignUp';
import FindAChef from './Components/FindAChef';
import UserRegistrationForm from './Components/UserRegistration';
import BookAChef from './Components/BookAChef';
import Payment from './Components/Payment';
import { AppStateProvider } from './Components/AppState';
import TermsAndCondition from './Components/TermsAndCondition';
function App() {
  return (
    <Router>
         <AppStateProvider>
          <div className='main-container'>
        <HomeNavbar />
        <div className='min-h'>
          <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/chefregister' element={<ChefRegistrationForm />} />
            <Route path='/userregister' element={<UserRegistrationForm />} />
            <Route path='/bookchef' element={<BookAChef/>} />
            <Route path='/findallchef' element={<FindAChef />} />
         <Route path='/termsandcondition' element={<TermsAndCondition></TermsAndCondition>}/>
            <Route path='/payment' element={<Payment/>} />
        
          </Routes>
        </div>
        <Footer />
      </div>
      </AppStateProvider>
      
    </Router>
  );
}

export default App;



