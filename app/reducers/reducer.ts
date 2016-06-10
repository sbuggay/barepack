var reducer = function(state, action) {
    switch(action.type) {
        case 'SWITCH_CONTACTS':
            console.log(action.payload)
            return state;

        default:
            return state;
    }
}

export default reducer