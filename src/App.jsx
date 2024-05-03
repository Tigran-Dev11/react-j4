import './App.css';

import {useRef} from 'react';

export default function App() {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  console.log('width: ', windowWidth.current);
  console.log('height: ', windowWidth.current);

  return (
    <div>
      <h2>Width: {windowWidth.current}</h2>

      <h2>Height: {windowHeight.current}</h2>
    </div>
  );
}