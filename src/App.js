import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Portfolio, Services, Contact} from './Pages/Pages';
import { Header, Footer } from './Components/Components';

const App = () => {
  const location = useLocation();

  window.addEventListener('load', ()=>{
    window.scrollTo(0,0)
  })

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path='/website-optimization/' element={<Services />} />
        <Route path="/about/" element={<Contact />} />
      </Routes>
      {
        location.pathname !== "/" ? <Footer /> : null
      }
    </>
  )
}

export default App