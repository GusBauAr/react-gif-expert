import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Digimon"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory)

    if (categories.includes(newCategory)) return; //Validar que sean únicos los nombres

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* imput */}
      <AddCategory
        // setCategories={setCategories}
        //le pasa la funcion al hijo
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* listado de gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* git item */}
    </>
  );
};
