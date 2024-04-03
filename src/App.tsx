import React from 'react';
import Home from './pages/home';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import MerchPage from './pages/merch';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/merch" element={<MerchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
