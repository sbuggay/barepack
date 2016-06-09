import * as React from 'react'

import actions from '../actions/actions'

class TodoInput extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.dispatch(actions.addTodo(this.state.inputText))
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default TodoInput