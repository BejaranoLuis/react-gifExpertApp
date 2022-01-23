export const getGifs = async(category) => {
    //console.log(`Dato a buscar ${category}`);
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=AE1tsc0PD32MEDOIDHbdW6DQIdRAwDw5`;
    const resp = await fetch(URL);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
    //setImages(gifs);
}