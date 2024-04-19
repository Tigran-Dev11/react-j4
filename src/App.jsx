import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./routes/router";

function App() {
  return (
    <div className="App">
      <Header />,
      <Router />,
      <Footer />
    </div>
  );
}

export default App;
