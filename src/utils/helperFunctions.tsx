import { Image } from './interfaces';

/**
 * Fetches images from the API, caches them in localStorage, then sets the imagesArray state.
 * If images are already cached, they are retrieved from localStorage.
 * 
 * @param useBigArray boolean flag indicating whether to use the small array or the large array
 * @param setImagesArray function to set the imagesArray state
 * @param setLoading function to set the loading state
 */
export const fetchAndCacheImages = async (useBigArray: boolean, setImagesArray: (images: Image[]) => void, setLoading: (newValue: boolean) => void) => {    
    setLoading(true);

    // set API_URL to either the small array or the large array depending on whether the user requested 50 or 5000 images
    const API_URL = useBigArray ? 'https://jsonplaceholder.typicode.com/photos' : 'https://jsonplaceholder.typicode.com/albums/1/photos';

    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setImagesArray(data);
        localStorage.setItem('cachedImages', JSON.stringify(data));
      } else {
        console.error('Failed to fetch images from the API');
      }
    } catch (error) {
      console.error('An error occurred while fetching images:', error);
    }

    setLoading(false);
};

/**
 * Shuffles an array of image objects.
 * 
 * @param arr array of image objects to be shuffled
 * @param currentIndex current index of item to shuffle
 * @param setImagesArray function to set the imagesArray state
 * @param setLoading function to set the loading state
 * @returns the original array with its items shuffled
 */
export const shuffleArray = (arr: Image[], currentIndex: number, setImagesArray: (images: Image[]) => void, setLoading: (newValue: boolean) => void) => {
    if (currentIndex <= 0) {
        setImagesArray(arr);
        setLoading(false);
        return;
    }

    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    const updatedArray = [...arr];
    [updatedArray[currentIndex], updatedArray[randomIndex]] = [updatedArray[randomIndex], updatedArray[currentIndex]];

    // Use a 0ms setTimeout to avoid max stack error when shuffling larger arrays.
    // I don't know if this is good practice, but the JSON Placeholder /photos endpoint provides 5,000 images.
    setTimeout(() => {
        shuffleArray(updatedArray, currentIndex - 1, setImagesArray, setLoading);
    }, 0);
};

/**
 * Checks LocalStorage for images and set image array and big array flag accordingly.
 * 
 * @param setImagesArray function to set the imagesArray state
 * @param setUseBigArray function to set the useBigArray state
 */
export const checkLocalStorageForImages = (setImagesArray: (images: Image[]) => void, setUseBigArray: (newValue: boolean) => void) => {    
    const cachedImgString = localStorage.getItem('cachedImages');
    const cachedImages = cachedImgString ? JSON.parse(cachedImgString) : [];

    if (cachedImages.length > 0) {
        setImagesArray(cachedImages);

        if (cachedImages.length === 5000) {
        setUseBigArray(true);
        }
    }
};