import './App.css'
import Pokedex from './components/Pokedex'
import Header from './components/Header'
import Footer from './components/Footer'
import React, {useState, useEffect} from 'react'
import style from 'styled-components'
import { motion } from "framer-motion"

const Spinner = style(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-top: 4px solid red;
  border-radius: 50%;
  display: inline-block;
`;

const Container = style.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const tempo = setTimeout(() =>{
      setCarregando(false);
    }, 4000)
    return () => clearTimeout(tempo);
  }, [])

  return (
    <>
    <Container>
        {carregando ? (
          <Spinner
          animate={{rotate: 360}}
          transition={{duration: 0.5, repeat: Infinity, ease: 'linear'}}
        ></Spinner>
        ):(
          <h1>Página Carregada</h1>
        )}
        
      </Container>
      <Header />
      <Pokedex />
      <Footer />
    </>
  )
}

export default App
