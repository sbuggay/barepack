import * as React from 'react'
import { connect } from 'react-redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h1>contacts-module</h1>
                <TodoInput dispatch={this.props.dispatch}/>
                <TodoList todos={this.props.todos}/>
            </div>
        )
    }
}

// Map state to props
// Is this required top level? What does this do?
function mapStateToProps(state: any) {
    return state
}

export default connect(mapStateToProps)(App)