function posts(state = [], action) {
    const i = action.index;
    switch (action.type) {
        case 'INCREMENT_LIKES':
            return [
                ...state.slice(0, i),
                Object.assign({}, state[i], { likes: state[i].likes + 1 }),
                ...state.slice(i + 1)
            ];
        case 'DECREMENT_LIKES':
            return [
                ...state.slice(0, i),
                Object.assign({}, state[i], { likes: state[i].likes - 1 }),
                ...state.slice(i + 1)
            ];
        default:
            return state;
    }
}

export default posts;