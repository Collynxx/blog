import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Homepage } from "./containers"
import { Blog } from "./containers"



function App () {
 return (
    <BrowserRouter>
    <Navbar/>
    <div className='App'>
     <Routes>
     <Route path="/"  element={<Homepage/>}/>
     <Route path="/blog/:id" element={<Blog/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
