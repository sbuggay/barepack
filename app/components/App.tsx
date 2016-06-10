import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TabControl from './TabControl'
import TableContainer from './TableContainer'

import actions from '../actions/actions'

class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <TabControl/>
                <TableContainer/>
            </div>
        );
    }
}

export default App;