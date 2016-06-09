import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './stores/store'
import App from './components/App'

// Configure store
let store = configureStore()

render(
    <App/>,
    document.getElementById('app')
)