import { useState, useEffect } from 'react';
import fetchImages from './Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';



const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showStartTitle, setShowStartTitle] = useState(true);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalFound, setTotalFound] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    setShowLoader(true);

    try {
      fetchImages(query, page).then(data => {
        if (!data.hits.length) {
          alert('No images found due to your search inquiry');
        } else {
          setShowStartTitle(false);
          setImages(prevState => {
            return [...prevState, ...data.hits];
          });
          setTotalFound(data.totalHits);
          setShowLoader(false);
          setScroll(document.documentElement.scrollHeight);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [page, query]);

  useEffect(() => {
    if (!scroll || page === 1) {
      return;
    }
    window.scrollBy({
      top: window.innerHeight - 240,
      behavior: 'smooth',
    });
  }, [page, scroll]);

  const searchQuery = newQuery => {
    if (newQuery.trim() !== query) {
      setPage(1);
      setQuery(newQuery.trim());
      setImages([]);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={searchQuery} />
      {showStartTitle && <h1>Input what you want to find</h1>}
      <ImageGallery images={images} />
      {showLoader && <Loader />}
      {images.length > 0 && images.length < totalFound && (
        <Button loadMore={loadMore} />
      )}
    </>
  );
}

export default App;