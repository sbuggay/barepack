import * as React from 'react'

import Table from '../../components/Table';

interface ContactsPageProps {
}

class ContactsPage extends React.Component<ContactsPageProps, any> {

    render() {
        return (
            <div>
                <Table/>
            </div>
        );
    }
}


export default ContactsPage;