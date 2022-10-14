import React from 'react'

const NavItem = ( {href, content, active, classes }) => {
  return (
    <li className={`${classes} ${active && 'active'}`}><a href={href}>{content}</a></li>
          
  )
}

export default NavItem