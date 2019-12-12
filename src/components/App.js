import React, {Component} from 'react'

import ToDo from './ToDo'
import Header from './Header'
import '../style.css'
import toDoData from '../toDoData'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: toDoData
        }
    }

    render() {
        const toDoComponents = toDoData.map(function (tasks) {
            return <ToDo key={tasks.id} name={tasks.name} priority={tasks.priority} ETA={tasks.ETA} />
        })

        return <div className="toDoList">
            <Header />
            {toDoComponents}
        </div>
    }
}

export default App






























