import React from 'react'
import IconContainer from '../../pages/Homepage/components/IconContainer'
import ProductsCard from './ProductsCard'

const ProductsSection = ({ title, description, products }: IProductsSectionProps) => {
  return (
    <section className='products w-full flex flex-col'>
        <div className="head w-full">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <div className="btnGroup">
            <IconContainer iconSrc='./icons/arrow-left.svg' classes='rounded-full'/>
            <IconContainer iconSrc='./icons/arrow-right.svg' classes='rounded-full bg-main-orange' />
          </div>
        </div>
        <div className="products-list w-full overflow-x-hidden flex flex-row">
          { products?.map((product) => (<ProductsCard key={'product' + product.id} product={product} />)) }
        </div>
    </section>
  )
}

export default ProductsSection