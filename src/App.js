import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Portfolio, Services, Contact, Error } from './Pages/Pages';
import { Header, Footer } from './Components/Components';

const App = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path='/services/' element={<Services />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {
        location.pathname !== "/" ? <Footer /> : null
      }
    </>
  )
}

export default App