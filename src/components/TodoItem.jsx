import React from 'react'
import '../css/TodoItem.css'

export default function TodoItem(props) {

    const task = props.task
    let date = new Date()
    let today = date.getDate()
    console.log(today)

    return (
    <div 
    className={`todoItem  ${[task.isCompleted ? 'completed' : '']}  ${[props.taskDetails == task.id ? 'showDetails' : '']}`} 
    key={task.id}
    onClick={() => props.changeValue(task.id, 'state')}
    >
        <div className='section'>
            <div className='taskName'>
                <button className='changeStateButton'></button>
                <h3>{task.title}</h3>
            </div>
            <button className='showDetailsButton' onClick={() => props.showDetails(task.id)}>
                <img src='./src/images/icon.png' className='buttonImage'></img>
            </button>
        </div>
        
        <div className='details'>
            <div className='changeNameDiv'>
                <input type="text" name="" id={`${task.id}input`} />
                <button onClick={() => props.changeValue(task.id, 'name')}>Change name</button>
            </div>
            <div className='terminDiv'>
                <p>Termin: </p>
                <input type="datetime-local" name="" id="" />
            </div>
        </div>
    </div>
    )
}
