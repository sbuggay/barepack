import * as React from 'react';

import TabControl from './TabControl';
import TableContainer from './TableContainer';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <TabControl/>
                <TableContainer/>
            </div>
        );
    }
}

export default App;