var actions = {
    addTodo(text: string) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    }
}

export default actions