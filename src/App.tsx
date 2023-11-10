import { useEffect, useState } from 'react';
import ImageScroller from './components/ImageScroller/ImageScroller';
import ShuffleButton from './components/ShuffleButton/ShuffleButton';
import ArraySwitcher from './components/ArraySwitcher/ArraySwitcher';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { checkLocalStorageForImages, fetchAndCacheImages, shuffleArray } from './utils/helperFunctions';
import styles from './App.module.css';
import { Image } from './utils/interfaces';

function App() {
  const [imagesArray, setImagesArray] = useState<Image[]>([]);
  const [useBigArray, setUseBigArray] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Toggles between using a small array of images and a large array of images.
   */
  const handleArraySwitcherClick = () => {
    setUseBigArray(!useBigArray);
    localStorage.removeItem('cachedImages');
  };

  /**
   * Shuffles the imagesArray state upon clicking the Shuffle button.
   */
  const handleShuffleClick = () => {
    setLoading(true);
    shuffleArray(imagesArray, imagesArray.length - 1, setImagesArray, setLoading);
  };

  /**
   * Checks LocalStorage for cached images on app start.
   */
  useEffect(() => {
    checkLocalStorageForImages(setImagesArray, setUseBigArray);
  }, []);

  /**
   * Fetches images from the API and caches them in LocalStorage if no images are loaded.
   */
  useEffect(() => {
    if (imagesArray.length === 0) {
      fetchAndCacheImages(useBigArray, setImagesArray, setLoading);
    }
  }, [imagesArray]);

  /**
   * Fetches images from the API and caches them in localStorage if array size changes.
   */
  useEffect(() => {
    fetchAndCacheImages(useBigArray, setImagesArray, setLoading);
  }, [useBigArray]);

  return (
    <>
      <div className={styles.imageScroller}>
        <ImageScroller imagesArray={imagesArray} />
      </div>
      <div className={styles.controlPanel}>
        {loading ? <LoadingSpinner /> :
        <div>
          <ShuffleButton handleShuffleClick={handleShuffleClick} />
          <ArraySwitcher handleArraySwitcherClick={handleArraySwitcherClick} switcherText={useBigArray ? `Try with 50 images` : `Try with 5,000 images`} />
        </div>
        }
      </div>
    </>
  );
}

export default App;