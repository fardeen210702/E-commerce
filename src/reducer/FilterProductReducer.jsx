
function FilterProductReducer(state, action) {
    switch (action.type) {
        case 'FILTER_DATA':
            return {
                ...state,
                filterAll: [...action.payload],
                allProducts: [...action.payload]
            }
            case 'UPDATE_ARRAY':
                const {name,value} =action.payload;
                return{
                    ...state,
                    filter:{
                        ...state.filter,
                        [name]:value
                    }
                }
                case 'UPDATE_ARRAY_SUCCESFUL':
                    let {allProducts} = state;
                    let newAllProducts = [...allProducts];

                    const {text} = state.filter;
                  if(text){
                    newAllProducts = newAllProducts.filter((e)=>{
                        return e.title.toLowerCase().includes(text)
                    })
                  }
                    return{
                        ...state,
                        filterAll:newAllProducts
                    }



        default:
            return state
    }

}

export default FilterProductReducer