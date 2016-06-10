var actions = {
    loadOutlookContacts: function() {
        return {
            type: 'LOAD_OUTLOOK_CONTACTS'
        }
    },
    loadCRMContacts: function() {
        return {
            type: 'LOAD_CRM_CONTACTS'
        }
    },
    switchContacts: function(contactType: string) {
        return {
            type: 'SWITCH_CONTACTS',
            contactType: contactType
        }
    }
};

export default actions;