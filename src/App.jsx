import { useState } from "react";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="App">
    
  
    { currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>  }
          
    </div>
  );
}

export default App;
