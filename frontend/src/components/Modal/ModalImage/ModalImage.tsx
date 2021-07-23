import React, { useEffect } from 'react';

interface ModalImageProps {
  setSelectedImage: any;
  selectedImage: string;
  imgAlt: string;
}

export const ModalImage: React.FC<ModalImageProps> = ({
  setSelectedImage,
  selectedImage,
  imgAlt,
}) => {
  const handleHide = (e: any) => {
    if (e.target.classList.contains('modal-backdrop')) {
      setSelectedImage(null);
    }
  };

  const imageStyle = {
    maxWidth: '60%',
    maxHeight: '80%',
  };
  return (
    <div className='modal-backdrop cursor-pointer' onClick={handleHide}>
      <img
        src={selectedImage}
        alt={imgAlt}
        className='block my-16 mx-auto shadow-lg'
        style={imageStyle}
      />
    </div>
  );
};
