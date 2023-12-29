import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from "./reducer/Reducer";
const AppProvider = createContext()

const initialstate = {
    isLoading:false,
    isError:false,
    products:[],
    mobiles:[],
    laptops:[],
    skinCare:[],
    groceries:[],
    furniture:[],
    popularItems:[],
    // womensClothing:[],
    // girlShoes:[],
    // boyShoes:[],

}

function Context({children}) {
    const [state, dispatch] = useReducer(reducer,initialstate)
    const API='https://dummyjson.com/products'


const getProducts=async (url)=>{
    dispatch({type:'IS_LOADING'})
try {
    const res =await axios.get(url)
    const products =await res.data.products
    // console.log(products,'data fetched');
    dispatch({type:'DATA_RENDERING' ,payload:products})
    dispatch({type:'MOBILE_DATA' ,payload:products})
    dispatch({type:'LAPTOP_DATA' ,payload:products})
    dispatch({type:'SKINCARE_DATA' ,payload:products})
    dispatch({type:'GROCERIES_DATA' ,payload:products})
    dispatch({type:'FURNITURE_DATA' ,payload:products})
    dispatch({type:'LESSER_PRICE' ,payload:products})
    // dispatch({type:'BOYSHOES_DATA' ,payload:products})
    // dispatch({type:'GIRLSHOES_DATA' ,payload:products})

} catch (error) {
    console.log(error,'err');
    dispatch({type:'API_ERROR'})
    
}

}

    useEffect(() => {
      getProducts(API)
    }, [])
    const handleScroll=()=>{
        window.scrollTo(0,0)
        }
    
  return (
   <AppProvider.Provider value={{...state,handleScroll}}>
    {children}

   </AppProvider.Provider>
  )
}

const useProductContext = ()=>{
    return useContext(AppProvider)
}
export {useProductContext, Context}