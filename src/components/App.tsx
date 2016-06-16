import * as React from 'react';

import TabControl from './TabControl';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <TabControl/>
                {this.props.children}
            </div>
        );
    }
}

export default App;