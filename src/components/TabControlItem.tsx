import * as React from 'react'
import { Link } from 'react-router';

interface TabControlItemProps {
    to: string,
    text: string
}

class TabControlItem extends React.Component<TabControlItemProps, any> {

    render() {
        return (     
             <Link to={this.props.to} activeStyle={{textDecoration: 'none', color: 'black'}} onlyActiveOnIndex={true}>{this.props.text}</Link>
        );
    }
}


export default TabControlItem;