import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

interface TableControlProps {
    contactsType: string,
    switchContacts: Function
}

class TableControl extends React.Component<TableControlProps, any> {

    render() {
        return (
            <select onChange={e => this.props.switchContacts(e)}>
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

const mapDispatchToProps = (dispatch) => {
    switchContacts: (e) => {
        dispatch({type: 'CHANGE_CONTACTS_TYPE', payload: e})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableControl)