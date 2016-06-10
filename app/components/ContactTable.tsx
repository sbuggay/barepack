import * as React from 'react'

import ContactItem from './ContactItem'

class ContactTable extends React.Component<any, any> {

    render() {
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Info1</th>
                    <th>Info2</th>
                </tr>
                {
                    this.props.contacts.map((contact, i) => {
                        return <ContactItem key={i}/>
                    })
                }
            </table>
        );
    }
}

export default ContactTable