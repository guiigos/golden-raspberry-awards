import React from 'react';
import Menu from './_menu';

const Aside: React.FC = (): React.ReactElement => (
  <aside className="menu bg-gray-200 p-4 w-60 hidden lg:block">
    <Menu />
  </aside>
);

export default Aside;
