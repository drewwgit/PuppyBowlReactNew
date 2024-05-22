import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerPage from './components/PlayerPage';
import AddPlayer from './components/AddPlayer';
import { useGetPlayersQuery } from './api';
import Nav from './components/Nav';
import './index.css';

function App() {

  const {isLoading} = useGetPlayersQuery(); 

  return (
    <>
    {isLoading? 
      <h1> Loading Page... </h1> :
    <>
      <Nav />
      <Routes>
        <Route index element={<PlayerList />} />
        <Route path="/players/:id" element={<PlayerPage />} />
        <Route path="addPlayer" element={<AddPlayer />} />
      </Routes>
      </>}

    </>
  )
}

export default App;