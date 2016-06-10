import * as React from 'react'

class ContactTypeSelect extends React.Component<any, any> {

    // Is this where an action would be fired onChange of the select?
    handleChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <select onChange={this.handleChange.bind(this)}>
                <option value="outlook">Outlook Contacts</option>
                <option value="crm">CRM Contacts</option>
            </select>
        )
    }
}

export default ContactTypeSelect