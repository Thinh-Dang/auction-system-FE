import React from 'react'
import Button from '../../../components/Button'
import IconContainer from './IconContainer'

const HeroBanner = () => {
  return (
    <section 
      className='w-full mt-[1rem] flex flex-col md:flex-row space-between 
      text-body-2 gap-[7rem] justify-center md:items-center
      '
    >
      <div className="HeroBanner-content flex flex-col justify-center gap-[2.4rem] md:py-4">
        <h1 className="HeroBanner-title font-bold text-h1 leading-[7rem]">
          World's Biggest <br/>
          <span className='text-main-blue'>Antique Collection</span>
        </h1>
        <p className="HeroBanner-introduce text-caption-1 leading-[2.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Eget in mattis lacus urna, neque lectus ultrices. 
          Mus nec enim, amet, turpis sem in lacinia morbi nam
        </p>
        <Button classes='self-start text-white bg-main-orange text-button-2' content='Discover now'/>
      </div>

      <img src="./images/herobanner.jpg" alt="" className='w-[40%] m-w-[40rem] h-auto hidden md:block'/>

      <div className="HeroBanner-info flex flex-col gap-[4rem] hidden md:flex">
        <div className="HeroBanner-info-item flex gap-[1rem] flex items-center text-[#404040]">
          <IconContainer iconSrc='./icons/Timer.svg' classes='rounded-[.8rem]'/>
          <p className='text-[1rem] leading-[1.5rem]'>
            <span className='font-bold text-[2.1rem]'>1322</span> <br/> 
            Year
          </p>
        </div>
        <div className="HeroBanner-info-item flex gap-[1rem] flex items-center text-[#404040]">
        <IconContainer iconSrc='./icons/Book-mark.svg' classes='rounded-[.8rem]' />
          <p className='text-[1rem] leading-[1.5rem]'>
            <span className='font-bold text-[2.1rem]'>29</span> <br/> 
            Bid so far
          </p>
        </div>
        <div className="HeroBanner-info-item flex gap-[1rem] flex items-center text-[#404040]">
        <IconContainer iconSrc='./icons/Location.svg' classes='rounded-[.8rem]' />
          <p className='text-[1rem] leading-[1.5rem]'>
            <span className='font-bold text-[2.1rem]'>Roma</span> <br/> 
            From
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner