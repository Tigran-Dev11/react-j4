import Header from "./components/header";
import TodoTask from "./components/todo-task";

import TodoForm from "./components/todos-form";

function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <TodoTask />
    </>
  );
}

export default App;
