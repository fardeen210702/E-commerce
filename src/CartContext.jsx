import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./CartReducer";

const cartData = createContext()



function CartContext({children}) {
    // function updateData(){
    //     let updatedCart = localStorage.getItem('cartData')
    //     if(!updatedCart){
    //         return []
    //     }
    //     else{
    //         return JSON.parse(updatedCart)
    
    //     }
    // }    
    const initialState = {
        // cart:[],
        // cart:updateData(),
        
    }

    const [state, dispatch] = useReducer(reducer,initialState)

    function addData(id,count,elem){
        dispatch({type:"ADDTOCART" , payload:{id,count,elem}})
    }
    // locl storage
    // useEffect(() => {
    //   localStorage.setItem('cartData',JSON.stringify(state.cart))
    // }, [state.cart])
    
    function handleDeleteProduct(id){
   dispatch({type:'REMOVE_ITEM' ,payload:id})
    }
  return (
    <cartData.Provider value={{...state,addData,handleDeleteProduct}}> 
        {children}
    </cartData.Provider>
  )
}
const useCartContext =()=>{
    return  useContext(cartData)
}

export {CartContext, useCartContext}