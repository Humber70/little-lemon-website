import styles from './Menu.module.css'
import { useFilter } from '../../hooks/useFilter'
import Filters from '@/components/Filters/Filters.jsx'
import Products from '../../components/Products/Products'

export default function Menu () {

  const { filteredProducts } = useFilter()

  return (
    <section className={styles.sectionMenu}>
      <h1>menu</h1>
      <Filters />

        <hr />
      <section className={styles.sectionProductsMenu}>
        {filteredProducts.map(items => <Products key={items.title} dataProducts={items} variantStyle='menu'/> )}
      </section>
    </section>
  )
}