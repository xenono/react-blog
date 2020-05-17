import { useEffect } from 'react';

const useDetectMobile = handler => {
  const detectResize = () => {
    if (window.innerWidth <= 780) {
      return handler(true);
    }
    return handler(false);
  };
  useEffect(() => {
    detectResize();
    window.addEventListener('resize', detectResize);
  }, []);
};

export default useDetectMobile;
