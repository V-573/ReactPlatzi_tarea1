
import React from "react";
import { AppUi } from "./AppUi";
import "./App.css";
import { TodoProvider } from "../TodoContext";



function App() {
    return (
      <TodoProvider>
             <AppUi />
  </TodoProvider>


  );
}

export default App;
