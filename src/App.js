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
import Properties2 from './Components/Properties2'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup'
import Signup1 from './Components/Signup1'

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
        <Route path="finish_signup/" element={<Signup1 />} />
        <Route path="properties/" element={<Properties />} />
        <Route path="properties2/" element={<Properties2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App