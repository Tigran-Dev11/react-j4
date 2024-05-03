import { useEffect } from "react";

function App() {
   

  useEffect(()=>{
    const url = import.meta.env.VITE_API_URL;
    console.log(url);
  },[])


  return (
    <>
     
    </>
  );
}

export default App;
