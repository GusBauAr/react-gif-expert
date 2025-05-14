//este es un functional component

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs (category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, [])

  //retorna un objeto, un hook es una funcion que regresa algo  en este caso un objeto  
  return {
    images: images,
    isLoading,
  };
};
