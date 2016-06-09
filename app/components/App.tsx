import * as React from 'react'
import TextInput from './TextInput'

class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h1>contacts-module</h1>
                <TextInput/>
            </div>
        )
    }
}

export default App