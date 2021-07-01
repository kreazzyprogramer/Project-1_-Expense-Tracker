const TransReducer = ((state, action) => {
    switch (action.type) {
        case 'Add_Transaction': {
            console.log(state);
        return [...state,action.payload]

        }
        default:
            return (state);
    }
})
export default TransReducer;