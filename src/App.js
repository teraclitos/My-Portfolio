import Main from "./views/Main";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
