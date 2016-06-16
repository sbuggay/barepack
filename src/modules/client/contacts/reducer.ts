const initialState = {
    'test': 'what',
    'metadata': [
        'Name',
        'Email',
        'Phone Number'
    ]
}

export default function contacts(state = initialState, { type, payload}) {
    switch (type) {
        default:
            return state;
    }
}