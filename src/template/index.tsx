import React from 'react';
import Header from './_header';
import Aside from './_aside';
import Main from './_main';

const Template: React.FC = (): React.ReactElement => (
  <div className="h-screen">
    <Header />

    <div className="flex min-h-screen">
      <Aside />
      <Main />
    </div>
  </div>
);

export default Template;
