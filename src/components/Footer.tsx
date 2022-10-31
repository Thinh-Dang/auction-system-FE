import Logo from '../assets/Bold.svg'
import { Link } from 'react-router-dom'
import IconContainer from '../pages/Homepage/components/IconContainer'

const Footer = () => {
  const redirectToSocial = ( link: string ) => {
    window.location.href = link; 
  }
  return (
    <footer className='h-[40rem] w-full flex flex-col gap-12 md:gap-[12rem] mt-[5rem] md:mt-[15rem] '>
      <div className="footerNav w-full flex flex-wrap justify-between gap-16 md:gap-0">
        <FooterNav title={'Resources'} items={['Download','Help Center', 'Guide Book', 'App Directory']} />
        <FooterNav title={'Seboria'} items={['Download','Help Center', 'Guide Book', 'App Directory']} />
        <FooterNav title={'Company'} items={['Download','Help Center', 'Guide Book', 'App Directory']} />
        <FooterNav title={'Get In Touch'} items={['Download','Help Center']} />
      </div>
      <div className="contactInfo flex justify-between">
        <Link to={'/'} className='flex items-center'>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="social flex gap-7 py-4">
          <IconContainer 
            iconSrc='./icons/Facebook.svg' 
            onClick={() => redirectToSocial('https://www.facebook.com/')} 
            classes='rounded-full cursor-pointer'
          />
          <IconContainer 
            iconSrc='./icons/Youtube.svg' 
            onClick={() => redirectToSocial('https://www.youtube.com/')} 
            classes='rounded-full cursor-pointer'
          />
          <IconContainer 
            iconSrc='./icons/Twitter.svg'
            classes='rounded-full cursor-pointer'
            onClick={() => redirectToSocial('https://www.twitter.com/')}   
          />
        </div>
      </div>
    </footer>
  )
}

const FooterNav = ( {title, items }:any ) => {
  return (
    <ul className="flex flex-col text-main-base_grey gap-8 sm:flex-[45%] md:flex-[25%] sm:items-center md:items-start items-start">
      <li className='text-main-blue font-bold text-[1.6rem]'>{title}</li>
      { items?.map(( item:any, index:number ) => (
        <li key={`li ${index}`} className='text-[1.4rem] hover:text-main-gray'>
          <Link to={'/'}>{item}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Footer