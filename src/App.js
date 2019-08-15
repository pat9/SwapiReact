import React from 'react';
import Navbar from './Components/Navbar/Index'
import Main from './Components/Main/Index'
import Footer from './Components/Footer/Index'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Main/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
