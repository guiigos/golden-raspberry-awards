import React from "react";

interface Props {
  title: string;
}

const Card: React.FC<React.PropsWithChildren<Props>> = ({ title, children }): React.ReactElement => (
  <div className="bg-white rounded-lg shadow-lg p-6 m-4 min-w-[300px] overflow-auto">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

export default Card;
