import APP_PATH from '../constant/APP_PATH'

const Navcontainer = () => {
  return (
    <nav className="navContainer flex items-center ">
        <ul className='flex gap-[6rem]'>
          <li className="navItem relative "><a href={APP_PATH.ROOT.href}>{APP_PATH.ROOT.navContent}</a></li>
          <li className="navItem relative "><a href={APP_PATH.PRODUCTS.href}>{APP_PATH.PRODUCTS.navContent}</a></li>
          <li className="navItem relative "><a href={APP_PATH.SELLPRODUCT.href}>{APP_PATH.SELLPRODUCT.navContent}</a></li>
        </ul>
      </nav>
  )
}

export default Navcontainer