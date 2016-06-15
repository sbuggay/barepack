import * as React from 'react'
import { Link } from 'react-router';

interface TabControl {
}

class Table extends React.Component<TabControl, any> {

    render() {
        return (
            <div>
                <Link to="/">Contacts</Link>{' '}
                <Link to="/route2">Route 2</Link>{' '}
                <Link to="/route3">Route 3</Link>
                <hr/>
            </div>
        );
    }
}


export default Table