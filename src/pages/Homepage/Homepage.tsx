import ProductsSection from '../../components/Products/ProductsSection'
import HeroBanner from './components/HeroBanner'
import SearchSection from './components/SearchSection'

const products = [
  {id: '1', img: './images/products/romanstatues.png', productName: 'Roman Statues', year: 1192, type: 'Weapons', price: 123, bids: 14, endDate: '2022-12-25'},
  {id: '2', img: './images/products/usknife.png', productName: 'US Knife', year: 922, type: 'Vases', price: 12, bids: 11, endDate: '2022-12-27'},
  {id: '3', img: './images/products/vintageclock.png', productName: 'Antique Vintage Watch', year: 11, type: 'Weapons', price: 9999, bids: 14, endDate: '2022-12-29'},
  {id: '4', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Clocks', price: 123, bids: 16, endDate: '2022-12-30'},
]
const Homepage = () => {
  return (
    <main className='text-body-2'>
      <HeroBanner />
      {/* <SearchSection /> */}
      <ProductsSection 
        title='Recently Added' 
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget in mattis lacus urna, neque lectus ultrices. '}
        products={products}
      />
    </main>
  )
}

export default Homepage