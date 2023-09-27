import React from 'react'
import Menu from './_menu'

const Aside: React.FC = (): React.ReactElement => (
  <aside className="hidden w-60 bg-gray-200 p-4 lg:block">
    <Menu />
  </aside>
)

export default Aside
