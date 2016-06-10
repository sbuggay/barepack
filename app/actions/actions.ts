var actions = {
    switchContacts: function(contactType: string) {
        return {
            type: 'SWITCH_CONTACTS',
            contactType: contactType
        }
    }
}

export default actions