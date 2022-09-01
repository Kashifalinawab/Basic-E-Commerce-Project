
import React from "react"
import { BrowserRouter, } from "react-router-dom";

import ApiFetch from "./ApiFetch";


// import Clickcounting from "./Clickcounting";


function App() {
  return (
    <>

      {/* <Clickcounting /> */}
      <BrowserRouter>
        <ApiFetch />
        {/* <Routes> <Route path="Cart" /></Routes> */}
      </BrowserRouter>



    </>
  );
}

export default App;
