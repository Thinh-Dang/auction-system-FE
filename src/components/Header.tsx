import Logo from '../assets/Bold.svg'
import Button from './Button'
import Navcontainer from './Navcontainer'
import '../styles/components/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import APP_PATH from '../constant/APP_PATH'

const Header = () => {
  const navigate = useNavigate();
  const redirectToSignin = () => {
    navigate(APP_PATH.SIGNIN.href);
  }
  return (
    <section className='Navbar w-full flex justify-between py-[4rem] text-caption-1'>
      <Link to={'/'} className='flex items-center'>
         <img src={Logo} alt="Logo" />
      </Link>
        
      <Navcontainer/>
      <Button classes='bg-main-blue text-white text-button-2' content='Signin' onClick={redirectToSignin}/>
    </section>
  )
}

export default Header