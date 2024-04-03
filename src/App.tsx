import React from 'react';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import MerchPage from './pages/merch';
import Home from './pages/Home';
import MorePage from './pages/More';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stickers" element={<MerchPage/>}/>
        <Route path="/more" element={<MorePage/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
