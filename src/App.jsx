
import React from "react";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Router from "./routes/router";
import ScreenSize from "./hooks/ScreenSize";

function App() {
  return (
    <>
      <Header />
      <ScreenSize />
      <Router />
      <Footer />
    </>
  );
}

export default App;
