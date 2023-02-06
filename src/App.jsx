import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './components/Todo'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar />
    {/* <Todo /> */}
    <Calendar />
    <Footer />
    </> 
  )
}

export default App
