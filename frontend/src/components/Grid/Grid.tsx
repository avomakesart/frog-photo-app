import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode | ReactNode[];
  smCols?: string;
  mdCols?: string;
  lgCols?: string;
  xlCols?: string;
  space?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  smCols,
  mdCols,
  lgCols,
  xlCols,
  space,
}) => {
  return (
    <div
      className={`grid grid-cols-${smCols} md:grid-cols-${mdCols} lg:grid-cols-${lgCols} xl:grid-cols-${xlCols} gap-${space}`}
    >
      {children}
    </div>
  );
};
