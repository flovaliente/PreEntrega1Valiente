import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  )
}

export default App
