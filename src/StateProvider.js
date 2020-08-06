// We need this to track the basket.
// setup data layer

import React,{createContext, useContext, useReducer} from "react";  

//Data Layer

export const  StateContext= createContext();

//Provider

export const StateProvider=({reducer, intialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
)   

// How to use it inside of a component

export const useStateValue= ()=>useContext(StateContext);