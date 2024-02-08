import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeNavbar from './Components/Home/HomeNavbar';
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <Router>
      <div className='main-container'>
        <HomeNavbar />
        <div className='min-h'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<LoginForm></LoginForm>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
