import * as React from 'react'
import { connect } from 'react-redux'

import TableRow from './TableRow'

interface TableProps {
    contacts: any
}

class Table extends React.Component<TableProps, any> {

    render() {
        return (
            <table style={{border: 1}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Info1</th>
                        <th>Info2</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.contacts.map((contact, i) => {
                            return <TableRow key={i} contact={contact}/>
                        })
                    }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { contacts: state.contacts}
}

export default connect(mapStateToProps)(Table)