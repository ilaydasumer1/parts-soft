import React from 'react'
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Writen from './components/Writen';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Writen />
      <MainPage/>
    </div>
  )
}

export default App
