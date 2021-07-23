import React from 'react';
import { useWindowSize } from '../../hooks';

interface TopImagesProps {
  setSelectedImage: any;
  images: any[];
}

export const TopImages: React.FC<TopImagesProps> = ({
  setSelectedImage,
  images,
}) => {
  const size = useWindowSize();
  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {size.width <= 768
        ? images.slice(0, 1).map((newImage: any) => (
            <div
              className='flex flex-col mb-20 cursor-pointer'
              key={newImage.id}
              onClick={() => setSelectedImage(newImage.urls.regular)}
            >
              <img
                src={newImage.urls.regular}
                alt={newImage.alt_description}
                className='h-full w-full md:h-96 md:w-96'
              />
              <div className='flex items-center mt-4'>
                <div>
                  <img
                    src={newImage.user.profile_image.small}
                    alt={newImage.user.username}
                    className='rounded-full w-9'
                  />
                </div>
                <div className='flex flex-col ml-4'>
                  <h5 className='text-sm -mb-2'>{newImage.user.name}</h5>
                  <p className='text-xs text-gray-700'>
                    @{newImage.user.username}
                  </p>
                </div>
              </div>
            </div>
          ))
        : images.slice(0, 4).map((newImage: any) => (
            <div
              className='flex flex-col cursor-pointer'
              key={newImage.id}
              onClick={() => setSelectedImage(newImage.urls.regular)}
            >
              <img
                src={newImage.urls.regular}
                alt={newImage.alt_description}
                className='h-full w-full md:h-96 md:w-96'
              />
              <div className='flex items-center mt-4'>
                <div>
                  <img
                    src={newImage.user.profile_image.small}
                    alt={newImage.user.username}
                    className='rounded-full w-9'
                  />
                </div>
                <div className='flex flex-col ml-4'>
                  <h5 className='text-sm -mb-2'>{newImage.user.name}</h5>
                  <p className='text-xs text-gray-700'>
                    @{newImage.user.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};
