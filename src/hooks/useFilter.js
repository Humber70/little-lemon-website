import { useContext } from 'react'
import { products } from '@/mocks/data.json' 
import { FilterContext } from '../context/FilterContext'

export const useFilter = () => {

  const {filter, setFilter} = useContext(FilterContext)

  const filterProducts = (products) => {
    return filter.category === 'all' || filter.category === '' 
    ? products : filter.category === 'specials' ? products.filter( item => item.isSpecial)
    : products.filter(items => items.category === filter.category)
  }

  const filteredProducts = filterProducts(products)

  return {filteredProducts, setFilter, filter}
}