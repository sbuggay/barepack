var actions = {
    addTodo: function(text: string) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },
    toggleTodo: function(id: number) {
        return {
            type: 'TOGGLE_TODO',
            id: id
        }
    }
}

export default actions