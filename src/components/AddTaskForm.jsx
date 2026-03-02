import { useContext } from 'react'
import Field from './Field.jsx'
import Button from './Button.jsx'
import { TasksContext } from '../context/Taskscontext'

const AddTaskForm = () => {

    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = useContext(TasksContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field 
                classname='todo__field'
                label='New Task Title'
                id='new-task'
                value={newTaskTitle}
                onInput={(event) => setNewTaskTitle(event.target.value)}
                ref={newTaskInputRef}
            />
            <Button type='submit'>Add</Button>
        </form>
    )
}

export default AddTaskForm