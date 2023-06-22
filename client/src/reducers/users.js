export const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
        case 'UPDATE_CURRENT_USER':
            return state.map((s) => s._id === action.payload._id ? action.payload : state);
        default:
            return state;
    }
}