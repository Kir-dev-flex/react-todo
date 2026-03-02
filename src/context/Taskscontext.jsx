import { useState, useEffect, useRef, useCallback, useMemo, createContext } from 'react'


export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const { children } = props

        
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')

        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        return [
        {
            id: 'task-1',
            title: 'Practice React',
            isDone: false
        },
        {
            id: 'task-2',
            title: 'Learn Typescript',
            isDone: false
        },
        {
            id: 'task-3',
            title: 'Codewars practice',
            isDone: false
        },
        {
            id: 'task-4',
            title: 'Js base revise',
            isDone: true
        },
    ]
    })

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const newTaskInputRef = useRef(null)
    const firstIncopletedTaskRef = useRef(null)
    const firstIncopletedTaskId = tasks.find(({ isDone }) => !isDone)?.id
    
    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Are you sure?')

        if (isConfirmed) {
            setTasks([])
        }
    }, [])

    const deletetask = useCallback((taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isDone }
                }

                return task
            })
        )
    }, [tasks])

    const addTask = useCallback(() => {
        
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks((prevTasks) => [...prevTasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
            newTaskInputRef.current.focus()
        }
    }, [newTaskTitle])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        newTaskInputRef.current.focus()
    }, [])

    const filteredTasks = useMemo( () => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0
            ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
            : null
            }, [searchQuery, tasks])


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