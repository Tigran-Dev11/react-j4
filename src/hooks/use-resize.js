import { useEffect, useState } from "react";

export default function useResize() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();



  useEffect(()=>{


    const resize = ()=>{

    }

    window.addEventListener("resize", resize)
  },[])

  return { width, height };
}
