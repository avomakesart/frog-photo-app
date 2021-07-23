import React, { ReactNode } from 'react';

interface CardFormProps {
  formTitle?: string;
  onSubmit?: any;
  footer?: any;
  buttonText?: string;
  children: ReactNode | ReactNode[];
}

export const CardForm: React.FC<CardFormProps> = ({
  formTitle,
  footer,
  onSubmit,
  buttonText,
  children,
}) => {
  return (
    <>
      <div>
        <div className='mt-10 sm:mt-0'>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <h1 className='mx-auto mb-12 text-center md:text-left text-2xl font-normal leading-none tracking-tighter text-black lg:text-3xl title-font'>
              {formTitle}
            </h1>
            <div className='shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 bg-white sm:p-6'>{children}</div>
             {footer && <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  onClick={onSubmit}
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                >
                  {buttonText}
                </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
