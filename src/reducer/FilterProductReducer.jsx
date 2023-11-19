
function FilterProductReducer(state, action) {
    switch (action.type) {
        case 'FILTER_DATA':
            return {
                ...state,
                filterAll: [...action.payload],
                allProducts: [...action.payload]
            }



        default:
            return state
    }

}

export default FilterProductReducer