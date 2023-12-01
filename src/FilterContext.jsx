import { createContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Context";
import reducer from "./reducer/FilterProductReducer";

const FilterProducts = createContext()

const initialstate = {
    filterAll:[],
    allProducts:[],
    filter:{
        text:''
    }
}

import React, { useContext } from 'react'

function FilterContext({children}) {
    const {products} = useProductContext()
    const [state, dispatch] = useReducer(reducer,initialstate)

useEffect(() => {
    dispatch({type:'FILTER_DATA',payload:products})
    
}, [products])
useEffect(() => {
    dispatch({type:"UPDATE_ARRAY_SUCCESFUL"})
 
}, [products,state.filter])


function updateFilter(e){
let name = e.target.name;
let value = e.target.value;
  dispatch({type:"UPDATE_ARRAY" , payload:{name,value}})
}
  return (
   <FilterProducts.Provider value={{...state,updateFilter}}>
    {children}
   </FilterProducts.Provider>
  )
}
const useFilterContext=()=>{
return useContext(FilterProducts)
}

export  {FilterContext,useFilterContext}