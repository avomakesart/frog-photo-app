import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import reqRes from '../../api/reqRes';
import { Button, FeedImages, Loader, NavBar } from '../../components';
import { useMeQuery } from '../../generated/graphql';
import { useIsAuth } from '../../hooks';
import { withApollo } from '../../utils';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  useIsAuth();
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const { data, loading, error } = useMeQuery();

  useEffect(() => {
    const getImages = async () => {
      const response = await reqRes.get('/photos?per_page=16');
      setImages(response.data);
    };

    getImages();
    return () => setImages([]);
  }, []);

  const imagesLength = showMore ? images.length : 8;

  return (
    <>
      <NavBar />
      {error && <Loader />}
      {loading ? (
        <Loader />
      ) : (
        <div className='container mx-auto mt-80 md:mt-64 mb-8'>
          <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-10'>
            <div className='w-11/12 mx-auto md:w-full'>
              <Button
                type='button'
                btnType='secondary'
                onClick={() => router.push('/profile/messages')}
              >
                MESSAGE
              </Button>
            </div>
            <div className='flex flex-col items-center -mt-80 md:-mt-20'>
              <img
                alt='...'
                src={data?.me?.pictureUrl}
                className='shadow-xl rounded-full h-auto align-middle border-none absolute -mt-16'
                style={{ maxWidth: '150px' }}
              />
              <div className='flex flex-col mt-28 items-center'>
                <h2 className='font-light'>
                  {data?.me?.firstName} {data?.me?.lastName}
                </h2>
                <h6 className='font-bold uppercase mt-4'>San Francisco, CA</h6>
              </div>
            </div>
            <div className='w-11/12 -mt-14 mx-auto md:w-full md:mt-0'>
              <Button type='button' btnType='primary' className='uppercase'>
                Follow {data?.me?.firstName}
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col items-center px-6'>
        <FeedImages
          images={images}
          imagesLength={imagesLength}
          setShowMore={setShowMore}
        />
      </div>
    </>
  );
};
export default withApollo({ ssr: false })(Profile);
