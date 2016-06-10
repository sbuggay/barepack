function getId(state) {
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

var reducer = function(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [{
                    text: action.text,
                    completed: false,
                    id: getId(state)
                }, ...state.todos]
            })


        case 'TOGGLE_TODO':
            return state.todos.map((todo) => {
                return todo.id === action.id ?
                    Object.assign({}, todo, {completed: !todo.completed}) : todo
            })


        default:
            return state
    }
}

export default reducer