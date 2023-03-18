import React,{createContext,useContext,useReducer} from 'react'
import initialState from './data'
import globalReducer from './globalReducer'
const globalContext = createContext(initialState)

const GlobalContext = ({children}) => {
  const [state,dispatch] = useReducer(globalReducer,initialState)
  return (
    <globalContext.Provider value={{state,dispatch}}>
      {children}
      </globalContext.Provider>
  )
}
export const useGlobalContext = ()=>{
return useContext(globalContext)
}
export default GlobalContext