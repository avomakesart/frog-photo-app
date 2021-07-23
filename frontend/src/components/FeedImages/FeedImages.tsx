import React from 'react';
import { Button, Grid } from '..';

interface FeedImagesProps {
  images: any[];
  imagesLength: number | undefined;
  setShowMore: any;
}

export const FeedImages: React.FC<FeedImagesProps> = ({
  images,
  imagesLength,
  setShowMore,
}) => {
  return (
    <>
      <Grid smCols='2' mdCols='2' lgCols='3' xlCols='4' space='4'>
        {images.slice(0, imagesLength).map((newImage: any) => (
          <div className='flex flex-col' key={newImage.id}>
            <img
              src={newImage.urls.regular}
              alt={newImage.alt_description}
              className='h-full w-full md:h-96 md:w-96'
            />
          </div>
        ))}
      </Grid>

      <div className='w-full md:mx-auto md:w-1/2 my-28'>
        {imagesLength === 8 ? (
          <Button
            type='button'
            btnType='secondary'
            onClick={() => setShowMore(true)}
          >
            SHOW MORE
          </Button>
        ) : (
          <Button
            type='button'
            btnType='secondary'
            onClick={() => setShowMore(false)}
          >
            SHOW LESS
          </Button>
        )}
      </div>
    </>
  );
};
