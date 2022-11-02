import ProductsSection from "../../components/Products/ProductsSection";


const products = [
    {id: '1', img: './images/products/romanstatues.png', productName: 'Roman Statues', year: 1192, type: 'Weapons', price: 123, bids: 14, endDate: '2022-10-30'},
    {id: '2', img: './images/products/romanstatues.png', productName: 'Roman Statues', year: 1192, type: 'Weapons', price: 123, bids: 14, endDate: '2022-10-30'},
    {id: '3', img: './images/products/usknife.png', productName: 'US Knife', year: 922, type: 'Vases', price: 12, bids: 11, endDate: '2022-12-27'},
    {id: '4', img: './images/products/romanstatues.png', productName: 'Roman Statues', year: 1192, type: 'Weapons', price: 123, bids: 14, endDate: '2022-10-30'},
    {id: '5', img: './images/products/romanstatues.png', productName: 'Roman Statues', year: 1192, type: 'Weapons', price: 123, bids: 14, endDate: '2022-10-30'},
    {id: '6', img: './images/products/romanstatues.png', productName: 'Roman Statues', year: 1192, type: 'Weapons', price: 123, bids: 14, endDate: '2022-10-30'},
    {id: '7', img: './images/products/usknife.png', productName: 'US Knife', year: 922, type: 'Vases', price: 12, bids: 11, endDate: '2022-12-27'},
    {id: '8', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Clocks', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '9', img: 'https://picsum.photos/300/250', productName: 'US Knife', year: 922, type: 'Vases', price: 12, bids: 11, endDate: '2022-12-27'},
    {id: '10', img: 'https://picsum.photos/300/250', productName: 'US Knife', year: 922, type: 'Vases', price: 12, bids: 11, endDate: '2022-12-27'},
    {id: '11', img: './images/products/romanstatues.png', productName: 'Roman Statues', year: 1192, type: 'Weapons', price: 123, bids: 14, endDate: '2022-10-30'},
    {id: '12', img: './images/products/usknife.png', productName: 'US Knife', year: 922, type: 'Vases', price: 12, bids: 11, endDate: '2022-12-27'},
    {id: '13', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Clocks', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '14', img: './images/products/usknife.png', productName: 'US Knife', year: 922, type: 'Vases', price: 12, bids: 11, endDate: '2022-12-27'},
    {id: '15', img: 'https://picsum.photos/300/250', productName: 'Antique Vintage Watch', year: 11, type: 'Weapons', price: 9999, bids: 14, endDate: '2022-12-29'},
    {id: '16', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Clocks', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '17', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Clocks', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '18', img: 'https://picsum.photos/300/250', productName: 'Roman Clock', year: 1192, type: 'Clocks', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '19', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Statues', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '20', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Statues', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '21', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Jewels', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '22', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Statues', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '23', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Statues', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '24', img: 'https://picsum.photos/300/250', productName: 'Roman Clock', year: 1192, type: 'Jewels', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '25', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Jewels', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '26', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Statues', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '27', img: 'https://picsum.photos/300/250', productName: 'Roman Clock', year: 1192, type: 'Jewels', price: 123, bids: 16, endDate: '2022-12-30'},
    {id: '28', img: './images/products/antiqueclock.png', productName: 'Roman Clock', year: 1192, type: 'Jewels', price: 123, bids: 16, endDate: '2022-12-30'},
  ]

const types = new Set();
products.map( ( product ) => {
    types.add(product.type);
})
const filteredProducts:any = [];
types.forEach (function(type) {
    filteredProducts.push({type, data: products.filter(product => product.type === type)})
})

const Collections = () => {
  return (
    <main className='text-body-2 flex flex-col gap-[10rem] mt-8'>
       { 
        filteredProducts.map((item:any) => (
            <ProductsSection key={`section ${item.type}`} title={item.type} description={'Loreem'} products={item.data} />
        ))
       }
    </main>
  )
}

export default Collections