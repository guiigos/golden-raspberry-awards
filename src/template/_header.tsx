import React from 'react';
import { BiLogoReact } from 'react-icons/bi';
import Menu from './_menu';

const Header: React.FC = (): React.ReactElement => (
  <header className="bg-gray-800 text-white p-4">
    <div className="flex justify-between items-center">
      <div className="logo text-white flex flex-row gap-2">
        <BiLogoReact style={{ fontSize: '25px' }} /> FontEnd React Test
      </div>

      <nav className="block lg:hidden">
        <Menu />
      </nav>
    </div>
  </header>
);

export default Header;
