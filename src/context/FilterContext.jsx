import { createContext, useState } from 'react'

export const FilterContext = createContext();


export const FilterContextProvider = ({children}) => {

  const [filter, setFilter] = useState({
    category: ''
  })

  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  )
}