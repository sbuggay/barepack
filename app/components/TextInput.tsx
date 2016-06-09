import * as React from 'react'

class TextInput extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }

}

export default TextInput