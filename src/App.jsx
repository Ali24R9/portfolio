import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About } from '@/components/about/about'
import Nav from '@/components/nav/nav'
import Experience from '@/components/experience/experience'
import Footer from '@/components/footer/footer'
import Works from '@/components/works/works'
import Header from '@/components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Nav />
      <Experience />
      <Works />
      <Footer />
    </>
  )
}

export default App
