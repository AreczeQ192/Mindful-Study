import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import Calendar from './Calendar'
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/Main.css'

export default function Application() {
    const [area, setArea] = useState('todo')

    function setWorkspace(workspace){
        setArea(workspace)
        console.log(area)
    }

  return (
    <div className='container'>
        <Navbar />
        <main>
            {
                area == 'todo' ? <Todo /> :
                area == 'calendar' ? <Calendar /> : '' 
            }
        </main>
        <Footer
            setWorkspace = {setWorkspace.bind(this)}
        ></Footer>
    </div>
  )
}
