import { useContext } from 'react'

import AddTaskForm from './AddTaskForm.jsx'
import SearchTaskForm from './SearchTaskForm.jsx'
import TodoInfo from './TodoInfo.jsx'
import TodoList from './TodoList.jsx'
import Button from './Button.jsx'

import { TasksContext } from '../context/Taskscontext'

const Todo = () => {

    const { firstIncopletedTaskRef } = useContext(TasksContext)

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo />
            <Button 
            onClick={() => firstIncopletedTaskRef.current?.scrollIntoView({behavior: 'smooth'})} 
            >
            Show first incompleted task
            </Button>
            <TodoList />
        </div>
    )
}

export default Todo