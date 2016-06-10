import { createStore } from 'redux'
import reducer from '../reducers/reducer'


// Middleware goes here?

// Does initial state need to be set like this?
var configureStore = function(initialState = {contacts: [], contactsType: 'outlook'}) {
    return createStore(reducer, initialState)
}

export default configureStore