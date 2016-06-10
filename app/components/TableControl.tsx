import * as React from 'react'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import switchContacts from '../actions/actions'

interface TableControlProps {
    switchContacts: Function
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

const mapDispatchToProps = (dispatch) => {
    return {
        switchContacts: () => dispatch(switchContacts)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableControl)