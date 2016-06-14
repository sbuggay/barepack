import * as actionTypes from './actionTypes';

export function loadCRMContacts() {
    return {
        type: actionTypes.CRM_CONTACTS_LOAD_REQUEST
    }
}

export function loadCRMContactsSuccess() {
    return {
        type: actionTypes.CRM_CONTACTS_LOAD_SUCCESS
    }
}

export function loadCRMContactsFail() {
    return {
        type: actionTypes.CRM_CONTACTS_LOAD_FAIL
    }
}
