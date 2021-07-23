import React, { useRef, useEffect, useState } from 'react';

interface CardImageProps {
  image: any;
}

export const CardImage: React.FC<CardImageProps> = ({ image }) => {
  const [spans, setSpans] = useState(0);

  let imageRef = useRef() as any;

  useEffect(() => {
    const settingSpans = () => {
      const height = imageRef.current.clientHeight;

      const spansFn = Math.ceil(height / 10);

      setSpans(spansFn);
    };
    imageRef.current.addEventListener('load', settingSpans);
  }, [imageRef]);

  const { description, urls } = image;
  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <a href={urls.regular}>
        <img ref={imageRef} src={urls.regular} alt={description} />
      </a>
    </div>
  );
};
