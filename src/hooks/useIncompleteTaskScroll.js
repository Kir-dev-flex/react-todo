import { useRef } from 'react'

const useIncompleteTaskScroll = (tasks)  => {
    const firstIncopletedTaskRef = useRef(null)
    const firstIncopletedTaskId = tasks.find(({ isDone }) => !isDone)?.id

    return {
        firstIncopletedTaskRef,
        firstIncopletedTaskId,
    }
}

export default useIncompleteTaskScroll