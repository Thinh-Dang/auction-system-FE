import React from 'react'

const IconContainer = ( {iconSrc, classes, onClick}: IIconContainerProps ) => {
  return (
    <div onClick={onClick} className={`shadow-iconContainer w-[4.4rem] aspect-square flex items-center justify-center ${classes}`}>
        <img src={iconSrc} alt="icon" className='flex items-center justify-center' />
    </div>
  )
}

export default IconContainer