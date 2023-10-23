import React from 'react';
import Navbar from './Navbar';
import Home from './main_pages/Home';
import Projects from './main_pages/Projects';
import Contact from './main_pages/Contact';
import About from './main_pages/About';
import Footer from './Footer'
import { Navigate } from 'react-router-dom';

//import react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (<>
  <Router>
      <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/> {/* add props name*/}
      <Route exact path="/projects" element={<Projects/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route path='*' element={<Navigate to = '/'/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}
export default App;
