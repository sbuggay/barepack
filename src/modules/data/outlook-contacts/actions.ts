import * as actionTypes from './actionTypes';
import dispatch from 'redux-thunk';

export function loadOutlookContacts() {
    return {
        type: actionTypes.OUTLOOK_CONTACTS_LOAD_REQUEST
    }
}

export function loadOutlookContactsSuccess() {
    return {
        type: actionTypes.OUTLOOK_CONTACTS_LOAD_SUCCESS
    }
}

export function loadOutlookContactsFail() {
    return {
        type: actionTypes.OUTLOOK_CONTACTS_LOAD_FAIL
    }
}
