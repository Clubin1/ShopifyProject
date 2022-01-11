import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom' 
import HomePage from './views/Home/HomePage'
import FeedPage from './views/Feed/FeedPage'
import PODPage from './views/Feed/PODPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path='feed/apod' element={<PODPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
