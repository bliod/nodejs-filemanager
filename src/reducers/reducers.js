
export const counter = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'UPDATE':
            const currentState = [...state];
            let idx = currentState.findIndex(el => el.name === action.target)
            let isActive = currentState[idx].active;
            currentState[idx].active = !isActive;
            return currentState
        default:
            return state
    }
}