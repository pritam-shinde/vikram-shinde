import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Portfolio, Services, Contact, Error } from './Pages/Pages';
import { Header, Footer } from './Components/Components';

const App = () => {
  const location = useLocation()

  window.myInfo=()=>{
    let myInfo = {
      frontend:{
        Name:"Aditya Nitin Burse (Jain)",
        Designation:"Front-End Developer",
        Employer:"Nonstop Corporation"
      },
      backend:{
        Name:"Ankit Shahu",
        Designation:"Back-End Developer",
        Employer:"Nonstop Corporation"
      }
    }
    console.log(`Developed By ${JSON.stringify(myInfo)}`)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path='/services/' element={<Services />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
      {
        location.pathname !== "/" ? <Footer /> : null
      }
    </>
  )
}

export default App