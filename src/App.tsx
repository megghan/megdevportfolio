

import { useCursorTrail } from './hooks/useCursorTrail'; 
import { ThemeProvider } from "./(public)/_components/theme-provider"


import { Sobre } from './(public)/_components/aboutme'
import { Footer } from './(public)/_components/footer'
import { Header } from './(public)/_components/header'
import { Hero } from './(public)/_components/hero'
import { Projetos } from './(public)/_components/projetos'
import './global.css'
import { Technologies } from './(public)/_components/stack';

function App() {
  const { cursorRef } = useCursorTrail();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className='bg-dark-cement main-container'>
        <div ref={cursorRef} id="cursor-trail" className='fixed pointer-events-none z-1'/>

         <Header />

         <Hero />

         <Projetos />

         <Technologies />

         <Sobre />

         <Footer />

    </div>
    </ThemeProvider>
    
  )
}

export default App
