import Main from "./views/Main";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState("spanish");

  return (
    <BrowserRouter>
      <Main language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  );
}

export default App;
