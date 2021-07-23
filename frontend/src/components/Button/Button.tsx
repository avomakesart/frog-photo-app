import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode | ReactNode[];
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  btnType?: string | undefined;
  onClick?: () => void;
  className?: string | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  btnType,
  disabled,
  onClick,
}) => {
  const buttonType =
    btnType === 'primary'
      ? 'bg-black text-white'
      : btnType === 'secondary'
      ? 'bg-white text-black border-2 border-black'
      : 'bg-blue text-white';

  return (
    <div className='w-full'>
      <button
        type={type}
        className={`w-full ${className} font-medium inline-flex items-center justify-center border-2 border-transparent rounded-md leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg ${
          disabled ? 'text-gray-800 bg-gray-300 hover:bg-gray-200' : buttonType
        } w-full outline-none`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
