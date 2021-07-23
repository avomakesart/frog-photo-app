import React from 'react';

interface LoaderProps {
  title?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  title = 'Loading your data',
}) => {
  return (
    <div className='center-object'>
      <img
        src='https://media.giphy.com/media/jsfBiYnT0asLZNxqMZ/giphy.gif'
        alt='loading...'
        className='max-w-full w-40'
      />
      <h2 className='mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
        {title}
      </h2>
    </div>
  );
};
