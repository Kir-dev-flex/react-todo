import { createContext } from 'react'
import useTasks from '../hooks/useTasks'
import useIncompleteTaskScroll from '../hooks/useIncompleteTaskScroll'

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deletetask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask
    } = useTasks()

    const {
        firstIncopletedTaskRef,
        firstIncopletedTaskId,
    } = useIncompleteTaskScroll(tasks)

    return (
        <TasksContext.Provider
        value={{
            tasks,
            filteredTasks,
            firstIncopletedTaskRef,
            firstIncopletedTaskId,
            deletetask,
            deleteAllTasks,
            toggleTaskComplete,
            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            newTaskInputRef,
            addTask
        }}
        >
            {children}
        </TasksContext.Provider>
    )
}