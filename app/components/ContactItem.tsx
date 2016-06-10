import * as React from 'react'

import ContactItem from './ContactItem'

class ContactList extends React.Component<any, any> {

    render() {
        return (
            <tr>
                <td>name1</td>
                <td>email1</td>
                <td>info1</td>
                <td>info2</td>
            </tr>
        )
    }
}

export default ContactList