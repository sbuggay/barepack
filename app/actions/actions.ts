

var actions = {
    addTodo: function(text: string) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    }
}

export default actions