import * as React from 'react'

import TableControl from './TableControl'
import Table from './Table'

interface TableContainerProps {
}

class TableContainer extends React.Component<TableContainerProps, any> {

    render() {
        return (
            <div>
                <TableControl/>
                <Table/>
            </div>
        );
    }
}


export default TableContainer