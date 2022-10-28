import React, { RefObject, useRef } from 'react'
import IconContainer from '../../pages/Homepage/components/IconContainer'
import ProductsCard from './ProductsCard'
import '../../styles/components/ProductsSection.css'

const ProductsSection = ({ title, description, products }: IProductsSectionProps) => {
  const productsListRef = useRef<HTMLDivElement | null>(null);
  const scroll = (scrollOffset: number, element: RefObject<HTMLDivElement>) => {
    element.current && (element.current.scrollLeft += scrollOffset)
  }
  return (
    <section className='products w-full flex flex-col gap-[6rem]'>
        <div className="head w-full relative">
          <h2 className="title font-bold text-[3.8rem] leading-[6rem]">{title}</h2>
          <p className="description">{description}</p>
          <div className="btnGroup absolute right-0 top-0 gap-9 hidden md:flex">
            <IconContainer onClick={() => scroll(-400, productsListRef)} iconSrc='./icons/arrow-left.svg' classes='rounded-full cursor-pointer'/>
            <IconContainer onClick={() => scroll( 400, productsListRef)} iconSrc='./icons/arrow-right.svg' classes='rounded-full bg-main-orange cursor-pointer' />
          </div>
        </div>
        <div ref={productsListRef} className="products-list w-full overflow-x-scroll flex flex-row gap-[6rem] md:p-4 md:py-12">
          { products?.map((product) => (<ProductsCard key={'product' + product.id} product={product} />)) }
        </div>
    </section>
  )
}

export default ProductsSection