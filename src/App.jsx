import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';
import Features from './components/Features/Features';
import Filters from './components/Filters/Filters';
import Quotes from './components/Quotes/Quotes';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <SignUp/>
    <Features/>
    <Filters/>
    <Quotes/>
    <Footer/>
    </>
  )
}

export default App
