import './App.css'
import Pokedex from './components/Pokedex'
import Header from './components/Header'
import Footer from './components/Footer'
import React, {useState, useEffect} from 'react'
import style from 'styled-components'
import { motion } from "framer-motion"

function App() {
  return (
    <>
      <Header />
      <Pokedex />
      <Footer />
    </>
  )
}

export default App
