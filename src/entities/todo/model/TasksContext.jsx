import { createContext } from 'react'
import useTasks from './useTasks'
import useIncompleteTaskScroll from './useIncompleteTaskScroll'

// eslint-disable-next-line react-refresh/only-export-components
export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
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
            deleteTask,
            deleteAllTasks,
            toggleTaskComplete,
            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            newTaskInputRef,
            addTask,
            disappearingTaskId,
            appearingTaskId,
        }}
        >
            {children}
        </TasksContext.Provider>
    )
}