import { useContext } from 'react'
import { TasksContext } from '../context/Taskscontext'
import Field from './Field'

const SearchTaskForm = () => {

    const {
        searchQuery,
        setSearchQuery,
    } = useContext(TasksContext)

    return (
        <form className="todo__form"
        onSubmit={(event) => event.preventDefault()}
        >
            <Field 
                classname='todo__field'
                label='Search task'
                id='search-task'
                type='search'
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}

export default SearchTaskForm