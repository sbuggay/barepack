import * as React from 'react'

class TodoItem extends React.Component<any, any> {

    handleChange(event) {
        this.props.actions.toggleTodo(this.props.todo.id)
    }

    render() {
        return (
            <li>
                <div>{this.props.todo.text} 
                    <input type="checkbox" onChange={this.handleChange.bind(this)}/>
                </div>
            </li>
        )
    }
}

export default TodoItem