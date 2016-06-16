import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers/rootReducer';

import ContactsPage from './routes/contacts/ContactsPage';
import Route2Page from './routes/route2/Route2Page';
import Route3Page from './routes/route3/Route3Page';

import App from './components/App';

// Combine all reducers
const reducer = combineReducers({
    reducers,
    routing: routerReducer
});

// Create devtools
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
);

// Create store
const store = createStore(
    reducer,
    DevTools.instrument()
);

console.log(store);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={ContactsPage}/>
                    <Route path="route2" component={Route2Page}/>
                    <Route path="route3" component={Route3Page}/>
                </Route>
            </Router>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('app')
)