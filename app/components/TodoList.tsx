import * as React from 'react'

import TodoItem from './TodoItem'

class TodoList extends React.Component<any, any> {

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} actions={this.props.actions} todo={todo}/>
                    })
                }
            </ul>
        )
    }
}

export default TodoList