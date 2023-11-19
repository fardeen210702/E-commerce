import { createContext, useEffect, useReducer } from "react";
import { useProductContext } from "./context";
import reducer from "./reducer/FIlterProductReducer";

const FilterProducts = createContext()

const initialstate = {
    filterAll:[],
    allProducts:[]
}

import React, { useContext } from 'react'

function FilterContext({children}) {
    const {products} = useProductContext()
    const [state, dispatch] = useReducer(reducer,initialstate)

useEffect(() => {
    dispatch({type:'FILTER_DATA',payload:products})
 
}, [products])


  return (
   <FilterProducts.Provider value={{...state}}>
    {children}
   </FilterProducts.Provider>
  )
}
const useFilterContext=()=>{
return useContext(FilterProducts)
}

export  {FilterContext,useFilterContext}