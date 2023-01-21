import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Terms from './Components/Terms'
import Login from './Components/Login'
import PrivacyPolicy from './Components/PrivacyPolicy'
import Properties from './Components/Properties'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route path="contact_us/" element={<Contact />} />
        <Route path="terms_and_conditions/" element={<Terms />} />
        <Route path="privacy_policy/" element={<PrivacyPolicy />} />
        <Route path="properties/" element={<Properties />} />
        <Route path='/login/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App