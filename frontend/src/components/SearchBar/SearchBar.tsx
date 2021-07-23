import React, { useState } from 'react';

interface SearchBarProps {
  onSubmit: (value: any) => any;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className='flex flex-col'>
          <h1 className='text-left font-light mb-8'>Search</h1>
          <input
            className='bg-white border-2 border-black focus:border-gray-500 py-3 px-4 placeholder-gray-500 w-full text-black'
            type='text'
            name='query'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search all photos'
          />
        </div>
      </form>
    </>
  );
};
