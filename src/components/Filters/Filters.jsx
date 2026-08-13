import { useId } from 'react'
import { useFilter } from '../../hooks/useFilter'

export default function Filters () {

  const selectCategoryId = useId()
  const { filter, setFilter } = useFilter()


  function handleChangeSelect (e) {
    return setFilter(
      prev => {
        return {
          ...prev,
          category: e.target.value
        }
      }
    )
  }


  return (
    <section>
      <label htmlFor={selectCategoryId}>categories</label>
      <b>
      <span>{filter.category}</span>

      </b>
      <select id={selectCategoryId} onChange={handleChangeSelect} value={filter.category}>
        <option value="all">all</option>
        <option value="dessert">dessert</option>
        <option value="launch">launch</option>
        <option value="mains">mains</option>
        <option value="specials">specials</option>
      </select>
    </section>
  )
}