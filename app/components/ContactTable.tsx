import * as React from 'react'

import ContactRow from './ContactRow'

class ContactTable extends React.Component<any, any> {

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
                            return <ContactRow key={i}/>
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default ContactTable