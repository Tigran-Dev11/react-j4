import Button from "./common/button";
import Input from "./common/input";
import Home from "./pages/home";

function App() {
  const submit = () => {
    console.log("submit");
  };

  return (
    <div className="App">
      {/* <h1>hello j4</h1>
      <Button title="Submit" onClick={submit} />
      <Button title="edit" />
      <Button title="delete" id="10" />
      <Input placeholder="First Name"/> */}
      <header>

      </header>
      <Home />
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
