import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Career from './pages/career/Career'
import Clients from './pages/clients/Clients'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products'
import Navbar from './components/Navbar/Navbar';
<<<<<<< Updated upstream

// import Footer from './components/Footer'

=======
// import Footer from './components/Footer'
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <h1></h1>

      <Navbar/>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/career' element={<Career />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='products' element={<Products />} />
          </Routes>
<<<<<<< Updated upstream

          {/* <Footer/> */}

=======
          {/* <Footer/> */}
>>>>>>> Stashed changes
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
