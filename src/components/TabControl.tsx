import * as React from 'react'
import { Link } from 'react-router';

import TabControlItem from './TabControlItem';

interface TabControlProps {
}

class TabControl extends React.Component<TabControlProps, any> {

    render() {
        return (
            <div>
                <TabControlItem to="/" text="Contacts"/>{' '}
                <TabControlItem to="/route2" text="Route2"/>{' '}
                <TabControlItem to="/route3" text="Route3"/>
                <hr/>
            </div>
        );
    }
}

export default TabControl;