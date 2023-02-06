import React from 'react'
import '../css/Main.css'

export default function Footer(props) {
  const _footButtons = [
    {workspace: 'todo', id: 0},
    {workspace: 'calendar', id: 1},
    {workspace: 'w3', id: 2},
    {workspace: 'w4', id: 3},
    {workspace: 'w5', id: 4},
  ]

  const footButtons = _footButtons.map(el => {
    return(
      <button 
        key={el.id} 
        className='footButton' 
        onClick={() => props.setWorkspace(el.workspace)}
      >
        {el.workspace}
      </button>
    )
  })

  return (
    <footer>
        {footButtons}
    </footer>
  )
}
