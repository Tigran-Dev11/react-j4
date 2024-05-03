
import React from "react";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Router from "./routes/router";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
