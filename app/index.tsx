import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './stores/store'
import App from './components/App'

// Configure store
let store = configureStore({
    todos: [{id: 0, text: 'initial todo', completed: false}]
})

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)