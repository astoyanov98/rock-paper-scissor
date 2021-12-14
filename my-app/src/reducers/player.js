const initialState = {
    player: '',
    ai: '',
    winner: '',
    currentCash: 500
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAY':
            return { ...state, [action.key]: action.value }
        default:
            return state
    }
}

export default playerReducer