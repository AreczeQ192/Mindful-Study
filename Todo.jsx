import React from "react";
import TodoItem from './TodoItem'
import tasks from '../data/tasks.json'
import saveFile from "./saveFile";
import "../css/Todo.css"

class Todo extends React.Component{

    state = {
        tasks,
        taskName: '',
        showDtlsId: null
    }

     // adds new task
     addTask(){
        if (this.state.taskName){
            const newElements = this.state.tasks

            // #region saving json file
            // const newTask = {
            //     id: this.state.tasks.length,
            //     title: this.state.taskName,
            //     isCompleted: false
            // }

            // saveFile(newTask, this.state.tasks, '../data/tasks.json')
            
            // #endregion

            tasks.push({
                id: this.state.tasks.length,
                title: this.state.taskName,
                isCompleted: false
            })

            this.setState({ tasks: newElements })
        }
    }

    // used for adding new tasks
    eventHandler(event){
        const newValue = event.target.value
        this.setState({ taskName: newValue })
    }

    // #region functions  

    // changes task state: completed - incompleted
    // changeState(id) {
    //     const index = this.state.tasks.findIndex(x => x.id == id)
    //     const newElements = this.state.tasks
           
    //     newElements[index].isCompleted = !newElements[index].isCompleted
    //     this.setState({ elements: newElements })
    // }

    // changes task title (name)
    // changeName(id) {
    //     if (document.getElementById(`${id}input`).value){
    //         const index = this.state.tasks.findIndex(x => x.id == id)
    //         const newElements = this.state.tasks
            
    //         newElements[index].title = document.getElementById(`${index}input`).value
    //         this.setState({ elements: newElements })
    //     }  
    // }

    // #endregion


    changeValue(id, value){
        const index = this.state.tasks.findIndex(x => x.id == id)
            const newElements = this.state.tasks

            // change name
            if (value == "name") {
                if (document.getElementById(`${id}input`).value) {
                    newElements[index].title = document.getElementById(`${index}input`).value
                }
            }

            // change task's status (isCompleted)
            else if (value == "state") {
                if(this.state.showDtlsId != id){
                    newElements[index].isCompleted = !newElements[index].isCompleted
                }
            }

            this.setState({ elements: newElements })
    }

    showDetails(id) {
        this.changeValue(id, 'state')           // div onclick
        
        if (this.state.showDtlsId == id) 
        this.setState({showDtlsId: null})
        else 
        this.setState({showDtlsId: id}) 
    }

    render() {
        const todoItems = this.state.tasks.map(el => {
            return(
            <TodoItem 
                key={el.id} 
                task={el} 
                changeValue={this.changeValue.bind(this)}
                showDetails={this.showDetails.bind(this)}
                taskDetails={this.state.showDtlsId}
            >
            </TodoItem> ) 
        })
        
        return(
            <>
            <div className="title"><h1>Mindful Study</h1></div>
            <div className="addTask">
                <input type="text" name="" id="" onChange={this.eventHandler.bind(this)} value={this.state.taskName}/>
                <button onClick={this.addTask.bind(this)}>Add task</button>
            </div>
            <div>
                {todoItems}
            </div>
            </>
        )
    }
}

export default Todo
