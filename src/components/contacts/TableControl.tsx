import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

interface TableControlProps {
    switchContacts: Function,
    contactsType: string
}

class TableControl extends React.Component<TableControlProps, any> {

    render() {
        return (
            <select>
                <option value="outlook">Outlook Contacts</option>
                <option value="crm">CRM Contacts</option>
            </select>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contactsType: state.contactsType
    }
}

export default connect(mapStateToProps)(TableControl)