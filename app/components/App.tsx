import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

import actions from '../actions/actions'

class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <TodoInput dispatch={this.props.dispatch}/>
                <TodoList actions={actions} todos={this.props.todos}/>
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