import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Logo from './atoms/logo';
import ButtonNav from './atoms/ButtonNav';
import PrimaryNavigation from './molecules/PrimaryNavigation';
import moviesService from '../services/moviesService';

console.log('moviesService', moviesService.discoverMovies());


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );
}

export default App;
