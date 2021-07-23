import React, { useEffect, useState } from 'react';
import reqRes from '../../api/reqRes';
import { Loader, ModalImage, NavBar, TopImages } from '../../components';
import { FeedImages } from '../../components/FeedImages/FeedImages';
import { useIsAuth } from '../../hooks';
import { sortByDate, withApollo } from '../../utils';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  useIsAuth();
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      const response = await reqRes.get('/photos?per_page=16');
      setLoadingImages(!loadingImages);
      setImages(response.data);
    };

    getImages();
    if (images.length > 0) setLoadingImages(false);

    return () => {
      setImages([]);
      setLoadingImages(false);
    };
  }, []);

  const newestImages = images.sort(sortByDate).reverse();
  const imagesLength = showMore ? images.length : 8;

  return (
    <>
      <NavBar />
      {!loadingImages ? (
        <Loader />
      ) : (
        <div className='container mx-auto mt-8 px-3 mb-8'>
          <div className='flex flex-col'>
            <h1 className='text-left font-light mb-8'>Discover</h1>
            <h5 className='mb-8 uppercase'>What’s new today</h5>
            <TopImages
              setSelectedImage={setSelectedImage}
              images={newestImages}
            />
            {selectedImage && (
              <ModalImage
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}
                imgAlt='modal pic'
              />
            )}
            <h5 className='mt-8 md:mt-20 mb-8 uppercase'>Browse all</h5>

            <FeedImages
              images={images}
              imagesLength={imagesLength}
              setShowMore={setShowMore}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default withApollo({ ssr: false })(Home);
