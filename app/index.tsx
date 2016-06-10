import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './stores/store'
import App from './components/App'

// Configure store
// When does initial load happen? Should this be done through an action?
let store = configureStore({
    CRMContacts: [{name: 'devan buggay', email: 'test@email.com', info1: 'test info 1', info2: 'test info 2'}],
    OutlookContacts: [{name: 'colby siebgay', email: 'lel@email.com', info1: 'test info 1', info2: 'test info 2'}]
})

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)