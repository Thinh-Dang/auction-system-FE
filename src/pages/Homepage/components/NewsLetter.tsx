import React, { useRef } from 'react'
import IconContainer from './IconContainer'

const NewsLetter = () => {
  const inputRef = useRef(null);
  return (
    <section className='w-full bg-main-dark_blue p-4 py-[4rem] md:py-[5rem] md:px-[10rem] rounded-[12px] items-center flex md:flex-row flex-col justify-between'>
        <div className="content text-white w-[80%] md:max-w-[60%] flex flex-col gap-24 ">
            <div className="info">
              <h2 className="title font-bold text-[3.8rem] leading-[6rem]">Subscribe our newsletter</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, cnsectetur adipiscing elit. 
                Eget in mattis lacus urna, neque lectus ultrices. Lorem ipsum dolor sit amet, 
              </p>
            </div>
            <form className='formEmail w-full relative'>
                <input 
                  ref={inputRef}
                  className='w-full min-h-[7rem] text-[1.6rem] text-[#4C4C4C] px-8 py-6 placeholder-[#4C4C4C]
                            rounded-[.8rem] outline-none 
                            ' 
                  type="text" 
                  placeholder='Enter your email'  
                />
                <IconContainer iconSrc='./icons/Send.svg' classes='top-[50%] translate-y-[-50%] right-[1.7rem] absolute bg-white rounded-[8px] cursor-pointer' />
            </form>
        </div>
        <img className='max-w-[20rem] w-[100%] h-auto  object-cover' src="./images/products/Gramophone.png" alt="gramophone" />
    </section>
  )
}

export default NewsLetter