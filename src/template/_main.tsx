import React from 'react';
import { Outlet } from 'react-router-dom';

const Main: React.FC = (): React.ReactElement => (
  <main className="p-4 flex-1">
    <Outlet />
  </main>
);

export default Main;
