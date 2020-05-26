import React from 'react'
import { List } from './List';
import { connect } from 'react-redux';
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {


    addItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddTodo(
            this.input.value,
            ()=>this.input.value=''
        ))
    }

    removeItem= (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }

    toggleTodo = (todo) => {
        this.props.dispatch(handleToggleTodo(todo))
    }

    render() {
        return(
            <div>
                <h1>Todo List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={input=>this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>
                {this.props.loading ? <h3>loading...</h3> :
                <List 
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggleTodo}
                 />
                }
            </div>
        )
    }
}

export default connect((state)=>({
    todos:state.todos,
    loading:state.loading
}))(Todos)