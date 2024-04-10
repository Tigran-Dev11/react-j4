import Button from "./common/button";
import Input from "./common/input";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home title="Home Page" />
      <Footer />
    </div>
  );
}

export default App;
