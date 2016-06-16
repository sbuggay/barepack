import * as actionTypes from './actionTypes';

const initialState = [];

export default function outlookContacts(state = initialState, { type, payload}) {
    switch (type) {
        case actionTypes.OUTLOOK_CONTACTS_LOAD_REQUEST:
            return state;
        case actionTypes.OUTLOOK_CONTACTS_LOAD_SUCCESS:
            return state;
        case actionTypes.OUTLOOK_CONTACTS_LOAD_FAIL:
            return Object.assign({}, state, {
                error: true 
            });
        default:
            return state;
    }
}