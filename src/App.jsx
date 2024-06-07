import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Router } from "./routes/routes";

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
