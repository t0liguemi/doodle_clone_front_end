

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome  from "./views/welcomeSplash.js";
import "./custom.css";
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>

    
      
    </div>

  );
}

export default injectContext(App);
