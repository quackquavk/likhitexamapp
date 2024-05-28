import { useState, useEffect } from 'react';

const useImageExists = (src) => {
  const [exists, setExists] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setExists(true);
    img.onerror = () => setExists(false);
  }, [src]);

  return exists;
};

export default useImageExists;
