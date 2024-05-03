import  { useLayoutEffect, useState } from 'react';

function useResize() {
  const [width, setWidth] = useState([]);
  const [height, setHeight] = useState([]);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth([window.innerWidth]);
      setHeight([window.innerHeight]);

    }
    window.addEventListener('resize', updateSize);


    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return [width , height];
}


export {useResize}