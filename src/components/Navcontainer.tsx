import { useLocation } from 'react-router-dom';
import APP_PATH from '../constant/APP_PATH'
import NavItem from './NavItem';

const Navcontainer = () => {
  let location = useLocation(); 
  return (
    <nav className="navContainer flex items-center ">
        <ul className='flex gap-[6rem]'>
          <NavItem 
            classes='navItem relative cursor-pointer' 
            content={APP_PATH.ROOT.navContent} 
            href={APP_PATH.ROOT.href} 
            active={location.pathname === APP_PATH.ROOT.href}
          />
          <NavItem 
            classes='navItem relative cursor-pointer' 
            content={APP_PATH.PRODUCTS.navContent} 
            href={APP_PATH.PRODUCTS.href} 
            active={location.pathname === APP_PATH.PRODUCTS.href}
          />
          <NavItem 
            classes='navItem relative cursor-pointer' 
            content={APP_PATH.SELLPRODUCT.navContent} 
            href={APP_PATH.SELLPRODUCT.href} 
            active={location.pathname === APP_PATH.SELLPRODUCT.href}
          />
        </ul>
      </nav>
  )
}

export default Navcontainer;
