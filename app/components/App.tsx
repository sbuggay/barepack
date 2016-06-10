import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContactTable from './ContactTable'

import actions from '../actions/actions'

class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <ContactTable/>
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