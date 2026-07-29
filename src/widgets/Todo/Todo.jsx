import { useContext } from 'react'
import AddTaskForm from '@/features/add-task'
import SearchTaskForm from '@/features/search-task'
import TodoInfo from '@/features/stats'
import { TodoList } from '@/entities/todo'
import Button from '@/shared/ui/Button'
import { TasksContext } from '@/entities/todo'
import styles from './Todo.module.scss'

const Todo = () => {

    const { firstIncopletedTaskRef } = useContext(TasksContext)

    return (
        <div className={styles.todo}>
            <header className={styles.header}>
                <div>
                    <p className={styles.eyebrow}>Personal workspace</p>
                    <h1 className={styles.title}>Today’s focus</h1>
                    <p className={styles.subtitle}>A lightweight task list that keeps your day moving.</p>
                </div>
                <div className={styles.dateBadge}>
                    <span>{new Intl.DateTimeFormat('en', { weekday: 'short' }).format(new Date())}</span>
                    {new Date().getDate()}
                </div>
            </header>
            <section className={styles.addPanel} aria-label="Add a task">
                <AddTaskForm styles={styles} />
            </section>
            <div className={styles.toolbar}>
                <SearchTaskForm styles={styles} />
                <Button
                    onClick={() => firstIncopletedTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
                >
                    Next open task
                </Button>
            </div>
            <TodoInfo styles={styles} />
            <TodoList styles={styles} />
        </div>
    )
}

export default Todo
