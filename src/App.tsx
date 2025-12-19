import React from 'react';

import { useCursorTrail } from './hooks/useCursorTrail'; 

import { Sobre } from './(public)/_components/aboutme'
import { Footer } from './(public)/_components/footer'
import { Header } from './(public)/_components/header'
import { Hero } from './(public)/_components/hero'
import { Projetos } from './(public)/_components/projetos'
import './global.css'

function App() {
  const { cursorRef } = useCursorTrail();

  return (
    
    <div className='bg-dark-cement main-container'>
        <div ref={cursorRef} id="cursor-trail" className='fixed pointer-events-none z-1'/>

         <Header />

         <Hero />

         <Projetos />

         <Sobre />

         <Footer />

    </div>
    
  )
}

export default App
