import Header from "./components/header";
import TopHeader from "./components/top-header-for-sign-up";
import Router from "./routes/router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Router />
      {/* <AutoPlay/> */}
    </>
  );
}

export default App;
