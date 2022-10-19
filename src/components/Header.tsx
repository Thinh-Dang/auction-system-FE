import Logo from '../assets/Bold.svg'
import Button from './Button'
import Navcontainer from './Navcontainer'
import '../styles/components/Header.css'

const Header = () => {
  return (
    <section className='Navbar w-full flex justify-between py-[4rem] text-caption-1'>
      <img src={Logo} alt="Logo" />
      <Navcontainer/>
      <Button classes='bg-main-blue text-white' content='Signin'/>
    </section>
  )
}

export default Header