const initialState = {
    'test': 'what',
    'metadata': [
        'testing1',
        'testing2'
    ]
}

export default function (state = initialState, { type, payload}) {
    switch (type) {
        default:
            return state;
    }
}