import React, { useState } from 'react';
import reqRes from '../../api/reqRes';
import { Head, ImageList, NavBar, SearchBar } from '../../components';
import { withApollo } from '../../utils';
import { useIsAuth } from '../../hooks';

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  useIsAuth();
  const [images, setImages] = useState([]);

  const OnSearchSubmit = async (term: string) => {
    const response = await reqRes.get('/search/photos', {
      params: { query: term },
    });

    setImages(response.data.results);
  };

  return (
    <>
      <Head
        title='Photo App | Search'
        description='Make a great search to all the photos'
      />
      <NavBar />
      <div className='container mx-auto mt-8 px-3 mb-8'>
        <SearchBar onSubmit={OnSearchSubmit} />
        <div className='mt-10'>
          {images.length > 0 && <h5 className='mb-8'>ALL RESULTS</h5>}
          <ImageList imageArr={images} />
        </div>
      </div>
    </>
  );
};
export default withApollo({ ssr: false })(Search);
