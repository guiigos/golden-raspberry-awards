import React from 'react'
import { BiLogoReact } from 'react-icons/bi'
import Menu from './_menu'

const Header: React.FC = (): React.ReactElement => (
  <header className="bg-gray-800 p-4 text-white">
    <div className="flex items-center justify-between">
      <div className="flex flex-row gap-2 text-white">
        <BiLogoReact style={{ fontSize: '25px' }} /> FontEnd React Test
      </div>

      <nav className="block lg:hidden">
        <Menu />
      </nav>
    </div>
  </header>
)

export default Header
