import * as React from 'react'


interface TableControlProps {
    // handleChangeContacts: Function
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


export default TableControl