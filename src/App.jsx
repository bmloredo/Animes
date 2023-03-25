import React from "react";
import GlobalStyle from "./Style/globalStyles";
import Routers from "./utils/routes";

function App() {
  return (
    <div className="app">
      <div>
        <Routers location={window.location}></Routers>
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
