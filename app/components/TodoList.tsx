import * as React from 'react'

class TodoList extends React.Component<any, any> {

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return <li key={todo.id}>{todo.text}</li>
                    })
                }
            </ul>
        )
    }

}

export default TodoList