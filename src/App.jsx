import Todo from './components/Todo'
import { TasksProvider } from './context/Taskscontext'


const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App
