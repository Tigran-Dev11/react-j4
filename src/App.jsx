import { useEffect } from "react";
import Router from "./routes/router";
import Header from "./components/header";

function App() {
  useEffect(() => {
    const url = import.meta.env.VITE_API_URL;
    console.log(url);
  }, []);
  
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
