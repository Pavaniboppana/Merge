// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navigation from './Component/Home/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Footer from './Component/Footer/Footer';
import Cart from './Component/Cart/Cart';

function App() {
  return (
<>
  <Navigation/>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    {/* <Route path=" " element={< />}></Route> */}
  </Routes>
  <Footer/>
</>
  );
}

export default App;
