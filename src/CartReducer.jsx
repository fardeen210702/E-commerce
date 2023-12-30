
function CartReducer(state,action) {
    
    if(action.type==='ADDTOCART'){
        let {id,count,elem} = action.payload;
        let CartProduct =  {
            id:id,
            image:elem.thumbnail,
            price:elem.price,
            count,
            name:elem.title,
            max:elem.stock
        }
        return{
            ...state,
            cart: [...state.cart , CartProduct]
            
        }

    }
if(action.type ==='REMOVE_ITEM'){
const updateCart = state.cart.filter((elem)=> elem.id !==action.payload)
const newUpdateCart = new Set(updateCart)
return{
    ...state,
    cart:updateCart
}
}
  return state
}

export default CartReducer