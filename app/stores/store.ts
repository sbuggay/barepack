import { createStore } from 'redux'
import reducer from '../reducers/reducer'


// Middleware goes here?

var configureStore = function(initialState = {contacts: []}) {
    return createStore(reducer, initialState)
}

export default configureStore