import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { API_URL } from '../../utils';
// import { ReqResList, User } from '../interfaces/reqRes';
// import { reqResApi } from '../api/reqRes';

export const useImages = () => {
  const [images, setImages] = useState<any[]>([]);
  const refPage = useRef(1);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const resp = await axios.get<any>(API_URL, {
      params: { page: refPage.current },
    });

    if (resp.data.length > 0) {
      setImages(resp.data);
    } else {
      refPage.current--;
      alert('No more users');
    }
  };

  const nextPage = () => {
    refPage.current++;
    loadImages();
  };

  const prevPage = () => {
    if (refPage.current > 1) {
      refPage.current--;
      loadImages();
    }
  };

  return { images, nextPage, prevPage };
};
