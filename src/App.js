import * as React from 'react'
import { Routes, Route } from 'react-router-dom' 
import PODPage from './views/Feed/PODPage'
import Navbar from './components/Layout/Navbar'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PODPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
