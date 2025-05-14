
//creamos una funcion
export const getGifs = async(category) =>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dZEAZ9gDmKsDMe2dZAHEkom6Lc7KZcxd&q=${category}&limit=10`;
  //peticion http
  const resp = await fetch (url);
  //desestructuramos la data
  const {data} = await resp.json();


const gifs =data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
}));

return gifs;

}