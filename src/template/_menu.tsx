import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu: React.FC = (): React.ReactElement => {
  const location = useLocation();

  return (
    <ul className="flex flex-row lg:flex-col gap-2">
      <li className="mb-2 w-full">
        <Link className={`lg:block lg:w-full lg:hover:bg-gray-300 lg:px-2 lg:py-1 lg:rounded ${location.pathname === '/dashboard' ? 'text-blue-500' : 'lg:text-gray-800'}`} to="/dashboard">Dashboard</Link>
      </li>
      <li className="mb-2 w-full">
        <Link className={`lg:block lg:w-full lg:hover:bg-gray-300 lg:px-2 lg:py-1 lg:rounded ${location.pathname === '/list' ? 'text-blue-500' : 'lg:text-gray-800'}`} to="/list">List</Link>
      </li>
    </ul>
  );
}

export default Menu;
