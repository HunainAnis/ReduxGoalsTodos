import {ADD_GOAL} from '../actions/goals'
import {ADD_TODO} from '../actions/todos'


const checker = (store) => (next) => (action) => {
    if(
        action.type === ADD_TODO && 
        action.todo.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope that's a bad Idea.")
    }

    if(
        action.type === ADD_GOAL && 
        action.goal.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope that's a bad Idea.")
    }
    return next(action)
}

export default checker