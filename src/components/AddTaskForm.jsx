import { useState, useContext } from 'react'
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

    const [error, setError] = useState('')

    const clearNewTaskTitle = newTaskTitle.trim();
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

    const onSubmit = (event) => {
        event.preventDefault()
        if (!isNewTaskTitleEmpty) {
            addTask(clearNewTaskTitle)
        }
    }

    const onInput = (event) => {
        const { value } = event.target;
        const clearValue = value.trim();
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0;

        setNewTaskTitle(value);
        setError(hasOnlySpaces ? 'The task cannot be empty' : '')
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field 
                className='todo__field'
                label='New Task Title'
                id='new-task'
                value={newTaskTitle}
                onInput={onInput}
                ref={newTaskInputRef}
                error={error}
            />
            <Button 
            isDisabled={isNewTaskTitleEmpty}
            type='submit'
            >
                Add
            </Button>
        </form>
    )
}

export default AddTaskForm