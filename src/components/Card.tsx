import React from 'react'

interface Props {
  title: string
}

const Card: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  children
}): React.ReactElement => (
  <div className="m-4 min-w-[300px] overflow-auto rounded-lg bg-white p-6 shadow-lg">
    <h2 className="mb-2 text-xl font-bold">{title}</h2>
    {children}
  </div>
)

export default Card
