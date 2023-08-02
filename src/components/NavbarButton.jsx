import React from 'react'

const NavbarButton = ({ icon, text, className }) => {
  return (
    <a className={className} href='#'>
      {icon}{text}
    </a>
  )
}

export default NavbarButton