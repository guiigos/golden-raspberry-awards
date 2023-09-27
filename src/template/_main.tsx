import React from 'react'
import { Outlet } from 'react-router-dom'

const Main: React.FC = (): React.ReactElement => (
  <main className="flex-1 p-4">
    <Outlet />
  </main>
)

export default Main
