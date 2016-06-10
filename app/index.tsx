import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './stores/store'
import App from './components/App'

import api from './fakeApi'

// Configure store
// When does initial load happen? Should this be done through an action?
let store = configureStore();

console.log(api.getOutlookContacts())

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)