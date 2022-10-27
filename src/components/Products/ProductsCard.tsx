import React from 'react'
import Button from '../Button'

const ProductsCard = ({product}: any) => {
  return (
    <div className='flex h-[50rem] p-8 flex-col'>
        <img src={product.img} alt="antique" className="product-img max-w-[30rem] w-[100%] h-auto rounded-[1.2rem]" />
        <div className="product-info flex flex-col gap-8">
            <span className='font-bold text-[2.2rem]'>{product.productName}</span>
            <div className='w-full flex justify-between'>
                <span className="product-year">{product.year}</span>
                <span className="product-year">{product.type}</span>
            </div>
            <div className="product-price w-full flex justify-between">
                <span>${product.price}</span>
                <Button content='Bid now' classes='bg-main-blue text-white' />
            </div>
        </div>
    </div>
  )
}

export default ProductsCard