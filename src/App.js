
import './App.css';
import Navigation from './Components/Navigation';
import SignupForm from './Components/SignupForm';
import Profile from './Components/Profile';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {



  return (
    <>
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<SignupForm />} />s
        <Route path='/profile' element={<Profile></Profile>} />
      </Routes>
    </>

  );
}

export default App;
