import API from 'goals-todos-api'

export const RECEIVE_ACTION = 'RECEIVE_ACTION' 


function receiveData(todos, goals) {
    return{
        type: RECEIVE_ACTION,
        todos,
        goals
    }
}

export function handleInitialData() {
    return (dispatch) => {

    Promise.all([
        API.fetchTodos(),
        API.fetchGoals()
    ]).then(([ todos, goals ]) => {
        dispatch(receiveData(todos, goals))
    })
}
}