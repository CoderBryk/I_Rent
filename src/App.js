import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Terms from './Components/Terms'
import Signup from './Components/Signup'
import Login from './Components/Login'
import PrivacyPolicy from './Components/PrivacyPolicy'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
        <Route path="contact_us/" element={<Contact />} />
        <Route path="terms_and_conditions/" element={<Terms />} />
        <Route path="privacy_policy/" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App