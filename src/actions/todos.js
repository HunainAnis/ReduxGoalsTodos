import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo (todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}
function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}
function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        API.saveTodo(name)
        .then((todo)=>{
            dispatch(addTodo(todo))
            cb()
        })
        .catch(()=> {alert('There was an error, please try again!')})
    }
}

export function handleToggleTodo(todo) {
    return(dispatch) => {
        dispatch(toggleTodo(todo.id))
        return API.saveTodoToggle(todo.id)
        .catch(()=>{
            alert('a problem occured, try again!')
            dispatch(toggleTodo(todo.id))
        })
    }
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id))
        return API.deleteTodo(todo.id)
        .catch(()=>{
            alert('a problem occured, try again!')
            dispatch(addTodo(todo))
        })
    }
}