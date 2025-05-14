import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //desestructuramos un objeto
  const { images, isLoading } = useFetchGifs(category);

  return (
    //creamo sun fragmento
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>cargando.....</h2> //mensqje de cargando
      }
      <div className="card-grid">
        {
          //mostrar los titulos de las imagenes
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  );
};