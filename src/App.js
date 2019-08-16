import React from 'react';
import Navbar from './Components/Navbar/Index'
import Main from './Components/Main/Index'
import Footer from './Components/Footer/Index'
import StarWarsProvider from './Providers/StarWarsProvider'

function App() {
  return (
    <StarWarsProvider>
      <Navbar/>
      <div className="container">
        <Main/>
      </div>
      <Footer/>
    </StarWarsProvider>
  );
}

export default App;
