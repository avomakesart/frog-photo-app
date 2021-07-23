import React from 'react';
import { CardImage } from '..';

interface ImageListProps {
  imageArr: any[];
}

export const ImageList: React.FC<ImageListProps> = ({ imageArr }) => {
  const images = imageArr.map((image) => {
    return <CardImage key={image.id} image={image} />;
  });

  return <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4'>{images}</div>;
};
