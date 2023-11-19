const Reducer = (state,action)=>{
switch (action.type) {
    case 'IS_LOADING':
        return{
            ...state,
            isLoading:true,
        }
        case 'DATA_RENDERING':
            return{
                ...state,
                isLoading:false,
                products:action.payload
            }
            case 'MOBILE_DATA':
                const mobileItems = action.payload.filter((e)=>{
                    return e.category === 'smartphones'
                })
                // console.log(mobileItems,'mobiledata');
                return{
                    ...state,
                    mobiles:mobileItems,
                    isLoading:false
                }
            case 'LAPTOP_DATA':
                const laptopsItems = action.payload.filter((e)=>{
                    return e.category === 'laptops'
                })
                // console.log(laptopsItems,'laptopsItems');
                return{
                    ...state,
                    laptops:laptopsItems,
                    isLoading:false
                }
            case 'SKINCARE_DATA':
                const skinCareItems = action.payload.filter((e)=>{
                    return e.category === 'skincare'
                })
                // console.log(skinCareItems,'skinCareItems');
                return{
                    ...state,
                    skinCare:skinCareItems,
                    isLoading:false
                }
            case 'GROCERIES_DATA':
                const groceriesItems = action.payload.filter((e)=>{
                    return e.category === 'groceries'
                })
                // console.log(groceriesItems,'groceries');
                return{
                    ...state,
                    groceries:groceriesItems,
                    isLoading:false
                }
            case 'FURNITURE_DATA':
                const furnitureItems = action.payload.filter((e)=>{
                    return e.category == 'home-decoration'
                })
                // console.log(furnitureItems,'furnitureItems');
                return{
                    ...state,
                    furniture:furnitureItems,
                    isLoading:false
                }
                case 'LESSER_PRICE':
                    const newItems = action.payload.filter((e)=>{
                        return e.price > 600
                    })
                    // console.log(newItems,'newitems')
                    return{
                        ...state,
                        popularItems:newItems,
                        isLoading:false
                    }
                    
                


            case 'API_ERROR':
                return{
                    ...state,
                    isError:true,
                }
        
        

    default:
        return state;
}
}
export default Reducer