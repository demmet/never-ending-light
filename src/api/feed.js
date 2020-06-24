const fetchPhotos = async (callback) => {
  const photosHTTP = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
  const photosJson = await photosHTTP.json();
  callback(photosJson)
}

export default fetchPhotos;