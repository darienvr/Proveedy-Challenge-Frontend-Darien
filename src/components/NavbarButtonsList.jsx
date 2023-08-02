import React from 'react'
import NavbarButton from './NavbarButton';
import { BiSolidUser } from 'react-icons/bi';
import { TiFlash } from 'react-icons/ti';
import { AiOutlinePlus } from 'react-icons/ai';
import { PiBookOpenText } from 'react-icons/pi';

const NavbarButtonsList = () => {
  return (
    <div className='navbar-btn-container'>
      <NavbarButton icon={<TiFlash />} text='Upgrade' className='btn-upgrade' />
      <NavbarButton icon={<AiOutlinePlus />} text='Create Quiz' className='btn-create-quiz' />
      <NavbarButton icon={<PiBookOpenText />} text='My Library' className='btn-library' />
      <NavbarButton icon={<BiSolidUser />} className='btn-user' />
    </div>
  )
}

export default NavbarButtonsList