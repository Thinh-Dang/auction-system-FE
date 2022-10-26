import React from 'react'

const IconContainer = ( {iconSrc, classes}: any ) => {
  return (
    <div className={`shadow-iconContainer w-[4.4rem] aspect-square flex items-center justify-center ${classes}`}>
        <img src={iconSrc} alt="icon" className='flex items-center justify-center' />
    </div>
  )
}

export default IconContainer