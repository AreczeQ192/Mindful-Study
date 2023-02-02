import React from "react";
import * as fs from 'fs';

function saveFile(newTask, tasks, file){
    // const fs = require('fs')
    console.log('newTask')
    console.log(JSON.stringify(newTask))

    console.log('tasks')
    console.log(tasks)

    console.log('file')
    console.log(file)
    // console.log(fs)


    // fs.writeFile(file, JSON.stringify(newTask), err => {
    //     if (err) {
    //       throw err
    //     }
    //     console.log('JSON data is saved.')
    //   })
}

export default saveFile