import React from 'react'
import IconContainer from './IconContainer'

const NewsLetter = () => {
  return (
    <section className='w-full bg-main-dark_blue p-4 md:py-[5rem] md:px-[10rem] rounded-[12px] flex justify-between'>
        <div className="content text-white max-w-[70%]">
            <h2 className="title font-bold text-[3.8rem] leading-[6rem]">Subscribe our newsletter</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget in mattis lacus urna, neque lectus ultrices. Lorem ipsum dolor sit amet, </p>
        </div>
        <img className='max-w-[22rem] w-[100%] h-auto' src="./images/products/Gramophone.png" alt="gramophone" />
        <form className='formEmail w-full'>
            <input type="text" placeholder='Enter your email'  />
            <IconContainer iconSrc='./icons/Send.svg' classes='bg-white rounded-[8px] cursor-pointer' />
        </form>
    </section>
  )
}

export default NewsLetter