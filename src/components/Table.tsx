import * as React from 'react'
import { connect } from 'react-redux'

import TableRow from './TableRow'

interface TableProps {
    contacts: any,
    columns: Array<string>
}

class Table extends React.Component<TableProps, any> {

    render() {
        return (
            <table style={{border: '1px solid black', borderCollapse: 'true'}}>
                <thead>
                    <tr>
                        {this.props.contacts.metadata.map(function(col, i) {
                            return <th style={{border: '1px solid black'}} key={i}>{col}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { contacts: state.contacts}
}

export default connect(mapStateToProps)(Table)