import * as React from 'react';

import TabControl from './TabControl';
import TableContainer from './contacts/TableContainer';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <TabControl/>

            </div>
        );
    }
}

export default App;