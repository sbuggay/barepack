import * as React from 'react'

class TableRow extends React.Component<any, any> {

    render() {
        return (
            <tr>
                <td>{this.props.contact.name}</td>
                <td>email1</td>
                <td>info1</td>
                <td>info2</td>
            </tr>
        )
    }
}


export default TableRow